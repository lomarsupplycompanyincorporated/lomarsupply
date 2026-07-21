import ProductsGrid from "../../components/ProductsGrid";

export const metadata = {
  title: "Products — Lomar Supply Co., Inc.",
  description:
    "Browse Lomar Supply's full oil-spill response catalog — booms, skimmers, spill kits, absorbents, secondary containment and dispersants. In partnership with Expandi and Parker Systems.",
};

export default function ProductsPage() {
  return (
    <main className="wrap prod-page">
      <nav className="crumb"><a href="/">Home</a> <span>/</span> Products</nav>
      <span className="eyebrow">Product catalog</span>
      <h1 className="ph1">The full spill-response range, in stock.</h1>
      <p className="plead">
        In partnership with Expandi and Parker Systems, our booms and skimmers are made with
        top-quality materials and carry Philippine Coast Guard certification. Choose a category,
        then open any product for details and a quote.
      </p>
      <ProductsGrid />
    </main>
  );
}
