import { notFound } from "next/navigation";
import { ArrowUpRight, Phone, Mail, Check, ShieldCheck } from "lucide-react";
import { PRODUCTS, getProduct, getCategory, related, CAT_LABEL } from "../../../lib/products";
import ProductImage from "../../../components/ProductImage";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  if (!p) return { title: "Product not found — Lomar Supply Co., Inc." };
  const title = `${p.name} — Lomar Supply Co., Inc.`;
  return {
    title,
    description: p.desc,
    openGraph: { title, description: p.desc, images: [`/products/${p.slug}.jpg`], type: "website" },
  };
}

export default function ProductPage({ params }) {
  const p = getProduct(params.slug);
  if (!p) notFound();
  const cat = getCategory(p.cat);
  const rel = related(p.slug);
  const quote = `mailto:customerservice@lomarsupply.com?subject=${encodeURIComponent("Quote request: " + p.name)}`;

  return (
    <main className="wrap prod-page">
      <nav className="crumb">
        <a href="/">Home</a> <span>/</span> <a href="/products">Products</a> <span>/</span> {cat.label}
      </nav>

      <div className="pd">
        <div className="pd-media">
          <ProductImage slug={p.slug} name={p.name} />
        </div>

        <div className="pd-info">
          <div className="pc">
            <span>{CAT_LABEL[p.cat]}</span><span className="br">{p.brand}</span>
          </div>
          <h1 className="ph1">{p.name}</h1>
          {cat.certified && (
            <span className="badge"><ShieldCheck size={14} /> Philippine Coast Guard certified</span>
          )}
          <p className="plead">{p.desc}</p>

          <h2 className="pd-sub">Highlights</h2>
          <ul className="pd-list">
            {cat.highlights.map((h) => (
              <li key={h}><Check size={16} /> {h}</li>
            ))}
          </ul>

          <div className="pd-cta">
            <a className="btn-p" href={quote}><Mail size={17} /> Request a quote</a>
            <a className="btn-g" href="tel:+639175216621"><Phone size={16} /> Call the 24/7 hotline</a>
          </div>
          <p className="pd-note">
            Lomar offers free consultancy to match the right equipment to your location, purpose and budget.
          </p>
        </div>
      </div>

      {rel.length > 0 && (
        <section className="pd-rel">
          <h2 className="pd-sub">More in {cat.label}</h2>
          <div className="rel-grid">
            {rel.map((r) => (
              <a className="rel-card" href={`/products/${r.slug}`} key={r.slug}>
                <ProductImage slug={r.slug} name={r.name} />
                <div className="rel-b">
                  <h3>{r.name}</h3>
                  <span className="inq">View product <ArrowUpRight size={13} /></span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      <a className="back" href="/products">← Back to all products</a>
    </main>
  );
}
