"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS, CATEGORIES, CAT_LABEL } from "../lib/products";
import ProductImage from "./ProductImage";

export default function ProductsGrid() {
  const [cat, setCat] = useState("All");
  const chips = [{ key: "All", label: "All products" }, ...CATEGORIES];
  const list = PRODUCTS.filter((p) => cat === "All" || p.cat === cat);

  return (
    <>
      <div className="cat-bar">
        {chips.map((c) => {
          const n = c.key === "All" ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === c.key).length;
          return (
            <button key={c.key} className={"chip" + (cat === c.key ? " on" : "")} onClick={() => setCat(c.key)}>
              {c.label} <span className="ct">{n}</span>
            </button>
          );
        })}
      </div>
      <div className="pcards">
        {list.map((p) => (
          <a className="pcard" href={`/products/${p.slug}`} key={p.slug}>
            <ProductImage slug={p.slug} name={p.name} />
            <div className="pcard-b">
              <div className="pc"><span>{CAT_LABEL[p.cat]}</span><span className="br">{p.brand}</span></div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span className="inq">View product <ArrowUpRight size={14} /></span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
