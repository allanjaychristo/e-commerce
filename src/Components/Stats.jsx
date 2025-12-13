import "../styles.css";

export default function Stats() {
  return (
    <section className="stats">
      <h2>Nossas Conquistas</h2>

      <div className="stats-grid">
        <div>
          <h3>300+</h3>
          <p>Vinis vendidos</p>
        </div>

        <div>
          <h3>50+</h3>
          <p>Artistas disponíveis</p>
        </div>

        <div>
          <h3>4.8⭐</h3>
          <p>Avaliação dos clientes</p>
        </div>
      </div>
    </section>
  );
}
