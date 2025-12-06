import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductsPage() {
  const { addToCart } = useCart();

  const produtos = [
    { id: 1, nome: "Vinil Rita Lee", preco: 120 },
    { id: 2, nome: "Vinil Tim Maia", preco: 150 },
    { id: 3, nome: "Vinil Chico Buarque", preco: 140 },
  ];

  return (
    <div className="container mt-4">
      <h1>Produtos</h1>

      <div className="row">
        {produtos.map((produto) => (
          <div className="col-md-4 mb-3" key={produto.id}>
            <div className="card p-3">
              <h5>{produto.nome}</h5>
              <p>R$ {produto.preco}</p>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(produto)}
                >
                  Adicionar ao carrinho
                </button>

                <Link
                  className="btn btn-secondary"
                  to={`/produto/${produto.id}`}
                >
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
