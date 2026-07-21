export default function SiteFooter() {
  return (
    <footer className="sf">
      <div className="sf-in">
        <div>
          <div className="sf-brand">LOMAR SUPPLY CO., INC.</div>
          <p>The Philippines' full-service environmental supply house for oil-spill response — booms, skimmers, absorbents, dispersants and secondary containment.</p>
        </div>
        <div className="sf-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/#partners">Partners</a>
          <a href="/#contact">Contact</a>
          <a href="tel:+639175216621">24/7 Hotline</a>
        </div>
      </div>
      <div className="sf-bot">
        © {new Date().getFullYear()} Lomar Supply Co., Inc. · Parañaque City · Metro Manila · Philippines
      </div>
    </footer>
  );
}
