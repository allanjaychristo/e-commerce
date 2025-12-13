import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles.css";

export default function Produto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function carregarProduto() {
      const docRef = doc(db, "produtos", id);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        setProduto({ id: snap.id, ...snap.data() });
      } else {
        setProduto(undefined);
      }
    }

    carregarProduto();
  }, [id]);

  async function excluirProduto() {
    const confirmacao = window.confirm(
      "Tem certeza que deseja excluir este produto?"
    );

    if (!confirmacao) return;

    try {
      await deleteDoc(doc(db, "produtos", id));
      alert("Produto excluído com sucesso!");
      navigate("/produtos");
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      alert("Erro ao excluir produto.");
    }
  }

  if (produto === undefined) {
    return <h2>Produto não encontrado</h2>;
  }

  if (!produto) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div className="container mt-4">
      <h1>{produto.nome}</h1>

      <img
        src={produto.imagem}
        alt={produto.nome}
        style={{ width: "300px", borderRadius: "8px", marginBottom: "20px" }}
      />

      <p style={{ maxWidth: "500px" }}>{produto.descricao}</p>

      <p><strong>Preço:</strong> R$ {produto.preco}</p>

      <button
        className="btn btn-success me-2"
        onClick={() => addToCart(produto)}
      >
        Adicionar ao carrinho
      </button>

      <button
        className="btn btn-warning me-2"
        onClick={() => navigate(`/editar/${id}`)}
      >
        Editar produto
      </button>

      <button
        className="btn btn-danger"
        onClick={excluirProduto}
      >
        Excluir produto
      </button>
    </div>
  );
}
