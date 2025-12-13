import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles.css";

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregarProdutos() {
      const produtosRef = collection(db, "produtos");
      const snapshot = await getDocs(produtosRef);

      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProdutos(lista);
    }

    carregarProdutos();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Produtos</h1>

      <div className="row">
        {produtos.map((produto) => (
          <div className="col-md-4 mb-3" key={produto.id}>
            <div className="card p-3">

              <img
                src={produto.imagem}
                alt={produto.nome}
                className="card-img-top mb-3"
                style={{ height: "250px", objectFit: "cover", borderRadius: "8px" }}
              />

              <h5>{produto.nome}</h5>
              <p>R$ {produto.preco}</p>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(produto)}
                >
                  Adicionar ao carrinho
                </button>

                <Link className="btn btn-secondary" to={`/produto/${produto.id}`}>
                  Ver produto
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
