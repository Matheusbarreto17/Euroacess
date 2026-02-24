import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/img/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-dropdown]")) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className={`ea-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="ea-header__inner">

        {/* Logo */}
        <Link to="/" className="ea-brand">
          <img className="ea-brand__logo" src={logo} alt="EuroAcess" />
          <span className="ea-brand__text">EuroAcess</span>
        </Link>

        {/* Nav */}
        <nav className="ea-nav">

          {/* Dropdown Courses */}
          <div className="ea-nav__item" data-dropdown>
            <button
              type="button"
              className="ea-nav__link ea-nav__link--btn"
              onClick={() => setOpen((v) => !v)}
            >
              Cursos ▾
            </button>

            <div className={`ea-dropdown ${open ? "is-open" : ""}`}>
              <Link className="ea-dropdown__item" to="/courses">
                Cuidador de Idosos em Portugal
              </Link>
              <Link className="ea-dropdown__item" to="/courses?tag=best-seller">
                Trabalhe com Estética em Portugal
              </Link>
              <Link className="ea-dropdown__item" to="/courses?country=pt">
                Método Completo: Do Planejamento à Residência
              </Link>
              <Link className="ea-dropdown__item" to="/courses?country=pt">
                Operador de Call Center e Apoio ao Cliente
              </Link>
              <Link className="ea-dropdown__item" to="/courses?country=pt">
                Auxiliar Educacional – Educação Infantil
              </Link>
              <Link className="ea-dropdown__item" to="/courses?country=pt">
                Limpeza de Sofás, Tapetes e Estofados
              </Link>
            </div>
          </div>

          <NavLink
            to="/#how-it-works"
            className="ea-nav__link"
          >
            Como funciona
          </NavLink>

        </nav>

        {/* Actions */}
        <div className="ea-actions">
          <Link to="/login" className="ea-btn ea-btn--primary">
            Login
          </Link>
        </div>

      </div>
    </header>
  );
}