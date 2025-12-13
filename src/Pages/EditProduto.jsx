import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function EditProduto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    async function carregar() {
      const docRef = doc(db, "produtos", id);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        const dados = snap.data();
        setNome(dados.nome);
        setPreco(dados.preco);
        setDescricao(dados.descricao);
        setQuantidade(dados.quantidade);
        setImagem(dados.imagem);
      }
    }

    carregar();
  }, [id]);

  async function salvar() {
    const docRef = doc(db, "produtos", id);

    await updateDoc(docRef, {
      nome,
      preco: Number(preco),
      descricao,
      quantidade: Number(quantidade),
      imagem
    });

    alert("Produto atualizado!");
    navigate(`/produto/${id}`);
  }

  return (
    <div>
      <h1>Editar Produto</h1>

      <label>Nome</label><br />
      <input value={nome} onChange={e => setNome(e.target.value)} /><br /><br />

      <label>Preço</label><br />
      <input type="number" value={preco} onChange={e => setPreco(e.target.value)} /><br /><br />

      <label>Quantidade</label><br />
      <input type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)} /><br /><br />

      <label>Descrição</label><br />
      <input value={descricao} onChange={e => setDescricao(e.target.value)} /><br /><br />

      <label>URL da Imagem</label><br />
      <input value={imagem} onChange={e => setImagem(e.target.value)} /><br /><br />

      <button className="btn btn-primary" onClick={salvar}>Salvar alterações</button>
    </div>
  );
}
