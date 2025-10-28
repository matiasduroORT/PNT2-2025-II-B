import Image from "next/image";
import "./page.module.css";

export default function Home() {


  return (
<div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a Mi Sitio</h1>
        <p>Tu punto de partida hacia algo increíble 🚀</p>
        <button className="cta-button">Empezar ahora</button>
      </header>

      <section className="home-content">
        <div className="feature-card">
          <h2>Fácil de usar</h2>
          <p>Diseñado para ofrecerte una experiencia fluida y agradable.</p>
        </div>

        <div className="feature-card">
          <h2>Rápido y eficiente</h2>
          <p>Optimizado para que obtengas resultados al instante.</p>
        </div>

        <div className="feature-card">
          <h2>Seguro y confiable</h2>
          <p>Tu información está siempre protegida con nosotros.</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
