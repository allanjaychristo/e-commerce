import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "../styles.css";

function Cadastro() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [imagem, setImagem] = useState('');

  async function cadastrar() {
    try {
      const produtoData = {
        nome,
        preco: Number(preco),
        descricao,
        quantidade: Number(quantidade),
        imagem
      };

      const docRef = await addDoc(collection(db, "produtos"), produtoData);
      console.log("Produto cadastrado! ID:", docRef.id);

      setNome('');
      setPreco('');
      setDescricao('');
      setQuantidade('');
      setImagem('');
    } catch (error) {
      console.error("Erro ao cadastrar produto: ", error);
    }
  }

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">

        <h1 className="cadastro-title">Cadastro de Produto</h1>

        <label>Nome do produto</label>
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          className="input"
        />

        <label>Preço</label>
        <input 
          type="number" 
          value={preco} 
          onChange={(e) => setPreco(e.target.value)} 
          className="input"
        />

        <label>Quantidade</label>
        <input 
          type="number" 
          value={quantidade} 
          onChange={(e) => setQuantidade(e.target.value)} 
          className="input"
        />

        <label>Descrição</label>
        <input 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)} 
          className="input"
        />

        <label>URL da imagem</label>
        <input 
          type="text" 
          value={imagem} 
          onChange={(e) => setImagem(e.target.value)} 
          className="input"
        />

        <button onClick={cadastrar} className="cadastro-btn">
          Cadastrar
        </button>

      </div>
    </div>
  );
}

export default Cadastro;