import { Phone } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="sh">
      <div className="sh-in">
        <a className="sh-brand" href="/">
          <span className="sh-mk" />
          <span>LOMAR SUPPLY<small>ENVIRONMENTAL SPILL RESPONSE</small></span>
        </a>
        <nav className="sh-nav">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/#contact">Contact</a>
          <a className="sh-cta" href="tel:+639175216621"><Phone size={15} /> 24/7 Hotline</a>
        </nav>
      </div>
    </header>
  );
}
