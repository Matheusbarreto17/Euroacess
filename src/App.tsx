import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#07070b" }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
