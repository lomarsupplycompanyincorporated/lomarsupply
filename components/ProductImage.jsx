"use client";
import { useState } from "react";

const EXTS = ["jpg", "jpeg", "png", "webp"];

// Tries /products/<slug>.jpg, then .jpeg/.png/.webp, then shows a branded
// "image coming soon" placeholder. Drop a file into /public/products to fill it.
export default function ProductImage({ slug, name }) {
  const [i, setI] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    const initials = name.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
    return (
      <div className="pimg pimg-ph" role="img" aria-label={name}>
        <span className="pimg-mono">{initials || "LS"}</span>
        <em>Image coming soon</em>
      </div>
    );
  }
  return (
    <div className="pimg">
      <img
        src={`/products/${slug}.${EXTS[i]}`}
        alt={name}
        loading="lazy"
        onError={() => (i < EXTS.length - 1 ? setI(i + 1) : setFailed(true))}
      />
    </div>
  );
}
