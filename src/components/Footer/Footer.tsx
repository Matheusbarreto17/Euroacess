import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../assets/img/logo.png";

export default function Footer() {
  return (
    <footer className="ea-footer">
      <div className="ea-footer__inner">

        <div className="ea-footer__top">
          <Link to="/" className="ea-footer__brand">
            <img className="ea-footer__logo" src={logo} alt="EuroAcess" />
            <span>EuroAcess</span>
          </Link>

          <p className="ea-footer__desc">
            Practical courses and real strategies to help Brazilians succeed in the European market.
          </p>
        </div>

        <div className="ea-footer__grid">

          <div className="ea-footer__col">
            <h4>Platform</h4>
            <Link to="/#how-it-works">How it works</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/login">Login</Link>
          </div>

          <div className="ea-footer__col">
            <h4>Support</h4>
            <Link to="/help">Help Center</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
          </div>

          <div className="ea-footer__col">
            <h4>Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>

          <div className="ea-footer__col">
            <h4>Social</h4>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            <a href="https://instagram.com" target="_blank">Instagram</a>
            <a href="https://youtube.com" target="_blank">YouTube</a>
          </div>

        </div>

        <div className="ea-footer__bottom">
          <span>© {new Date().getFullYear()} EuroAcess</span>
          <span>Built for strategic migration.</span>
        </div>

      </div>
    </footer>
  );
}