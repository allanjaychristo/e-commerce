import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Produto() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const produtos = [
    { id: 1, nome: "Vinil Rita Lee", preco: 120 },
    { id: 2, nome: "Vinil Tim Maia", preco: 150 },
    { id: 3, nome: "Vinil Chico Buarque", preco: 140 },
  ];

  const produto = produtos.find((p) => p.id === Number(id));

  if (!produto) {
    return <h2>Produto não encontrado</h2>;
  }

  return (
    <div className="container mt-4">
      <h1>{produto.nome}</h1>
      <p>Preço: R$ {produto.preco}</p>

      <button
        className="btn btn-success"
        onClick={() => addToCart(produto)}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
