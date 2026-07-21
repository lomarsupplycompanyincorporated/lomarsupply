"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Waves, ShieldCheck, Droplets, Radar, Anchor, FlaskConical, Container,
  Eye, Filter, Phone, Mail, MapPin, ArrowUpRight, Menu, X, Ship, Factory,
  Mountain, Zap, Fuel, Plus, Clock, Globe, CircleDot,
} from "lucide-react";
import { PRODUCTS, CATEGORIES, CAT_LABEL } from "../lib/products";

/* ------------------------------------------------------------------ */
/*  Lomar Supply Co., Inc. — environmental spill-response supply house */
/*  Signature device: the containment boom line (their flagship        */
/*  product) used as the site's structural divider + hero motif.       */
/* ------------------------------------------------------------------ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

:root{
  --paper:#ffffff; --paper2:#f4f7f2; --paper3:#edf3e9;
  --brand:#0a7a3c; --brandDk:#066a33; --lime:#7dc242; --limeDk:#5fa62c; --emerald:#00a050;
  --ink:#0c1f16; --ink2:#3f5049; --muted:#6c7c73;
  --line:rgba(12,31,22,.12); --line2:rgba(12,31,22,.07);
  --card:#ffffff; --shadow:0 18px 40px -24px rgba(12,31,22,.28);
}
*{box-sizing:border-box}
.lomar{font-family:'IBM Plex Sans',system-ui,sans-serif;color:var(--ink);
  background:var(--paper);line-height:1.55;-webkit-font-smoothing:antialiased;overflow-x:hidden}
.lomar h1,.lomar h2,.lomar h3,.lomar h4{font-family:'Archivo',sans-serif;margin:0;line-height:1.02;color:var(--ink)}
.lomar p{margin:0}
.lomar a{color:inherit;text-decoration:none}
.mono{font-family:'IBM Plex Mono',monospace}
.wrap{max-width:1200px;margin:0 auto;padding:0 clamp(20px,5vw,56px)}
.eyebrow{font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.28em;
  text-transform:uppercase;color:var(--brand);display:flex;align-items:center;gap:12px}
.eyebrow::before{content:"";width:26px;height:1px;background:var(--brand);display:inline-block}

/* boom line */
.boom{display:flex;align-items:center;width:100%;gap:0;overflow:hidden;opacity:.95}
.boom .seg{height:2px;flex:1;background:linear-gradient(90deg,var(--lime),var(--brand));min-width:14px}
.boom .float{width:11px;height:11px;border-radius:50%;flex:0 0 auto;
  background:var(--lime);box-shadow:0 0 0 3px rgba(125,192,66,.20);animation:bob 3.4s ease-in-out infinite}
.boom .float:nth-child(4n){animation-delay:.6s}
.boom .float:nth-child(6n){animation-delay:1.2s}
@keyframes bob{0%,100%{transform:translateY(-2px)}50%{transform:translateY(2px)}}

/* nav */
.nav{position:fixed;top:0;left:0;right:0;z-index:50;transition:.35s;border-bottom:1px solid transparent;
  background:rgba(255,255,255,.82);backdrop-filter:blur(12px)}
.nav.scrolled{background:rgba(255,255,255,.94);border-bottom:1px solid var(--line);box-shadow:0 8px 30px -20px rgba(12,31,22,.3)}
.nav .bar{display:flex;align-items:center;justify-content:space-between;height:74px}
.brand{display:flex;align-items:center;gap:11px;font-family:'Archivo';font-weight:800;letter-spacing:.02em;font-size:19px;color:var(--ink)}
.brand .mk{width:30px;height:30px;border:2px solid var(--brand);border-radius:6px;display:grid;place-items:center;position:relative}
.brand .mk::after{content:"";width:14px;height:2px;background:var(--lime)}
.brand small{color:var(--muted);font-family:'IBM Plex Mono';font-weight:400;font-size:10px;letter-spacing:.22em;display:block;margin-top:2px}
.navlinks{display:flex;gap:30px;align-items:center}
.navlinks a{font-size:14px;color:var(--ink2);transition:.2s;position:relative}
.navlinks a:hover{color:var(--brand)}
.navcta{background:var(--brand);color:#fff;font-weight:700;padding:11px 18px;border-radius:8px;font-size:13.5px;
  display:inline-flex;align-items:center;gap:7px;transition:.2s;border:none;cursor:pointer;font-family:'IBM Plex Sans'}
.navcta:hover{background:var(--brandDk);transform:translateY(-1px)}
.burger{display:none;background:none;border:1px solid var(--line);color:var(--ink);width:44px;height:44px;border-radius:9px;cursor:pointer;place-items:center}
.mobile{display:none;flex-direction:column;gap:4px;padding:10px 0 22px}
.mobile a{padding:13px 4px;border-bottom:1px solid var(--line);font-size:16px;color:var(--ink)}

/* hero */
.hero{position:relative;padding:150px 0 90px;overflow:hidden;background:var(--paper)}
.hero .sheen{position:absolute;inset:0;pointer-events:none;
  background:
    radial-gradient(130% 90% at 12% -20%, rgba(125,192,66,.22), transparent 60%),
    radial-gradient(100% 80% at 100% -10%, rgba(0,160,80,.12), transparent 55%);
  animation:drift 22s ease-in-out infinite}
@keyframes drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-2%,1%,0) scale(1.04)}}
.hero .grid-bg{position:absolute;inset:0;opacity:.55;
  background-image:linear-gradient(var(--line2) 1px,transparent 1px),linear-gradient(90deg,var(--line2) 1px,transparent 1px);
  background-size:64px 64px;mask-image:radial-gradient(120% 90% at 50% 0%,#000,transparent 72%)}
.hero .inner{position:relative;z-index:2;max-width:940px}
.h-tag{display:inline-flex;align-items:center;gap:9px;padding:7px 14px;border:1px solid var(--line);border-radius:100px;
  font-family:'IBM Plex Mono';font-size:11.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--brand);
  margin-bottom:26px;background:rgba(125,192,66,.12)}
.h-tag .dot{width:8px;height:8px;border-radius:50%;background:var(--emerald);box-shadow:0 0 0 4px rgba(0,160,80,.18);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.hero h1{font-size:clamp(42px,7.4vw,88px);font-weight:900;letter-spacing:-.02em;color:var(--ink)}
.hero h1 .a{color:var(--brand)}
.hero .lead{font-size:clamp(16px,2vw,20px);color:var(--ink2);max-width:620px;margin:26px 0 34px}
.hbtns{display:flex;gap:14px;flex-wrap:wrap;align-items:center}
.btn-p{background:var(--brand);color:#fff;font-weight:700;padding:15px 24px;border-radius:10px;
  display:inline-flex;align-items:center;gap:9px;font-size:15px;transition:.2s;border:none;cursor:pointer;font-family:'IBM Plex Sans'}
.btn-p:hover{background:var(--brandDk);transform:translateY(-2px);box-shadow:0 14px 30px -12px rgba(10,122,60,.5)}
.btn-g{border:1px solid var(--line);color:var(--ink);padding:15px 22px;border-radius:10px;
  display:inline-flex;align-items:center;gap:9px;font-size:15px;transition:.2s;background:var(--card)}
.btn-g:hover{border-color:var(--brand);background:#f0f7ec}
.hero .boomrow{margin-top:64px}
.readout{margin-top:22px;display:inline-flex;align-items:center;gap:14px;flex-wrap:wrap;font-family:'IBM Plex Mono';font-size:13px;color:var(--muted);letter-spacing:.06em}
.readout .k{color:var(--brand)}
.readout b{color:var(--ink);font-weight:600}

/* marquee */
.marq{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--paper2);overflow:hidden;padding:16px 0}
.marq .track{display:flex;gap:44px;white-space:nowrap;width:max-content;animation:slide 28s linear infinite}
.marq span{font-family:'Archivo';font-weight:800;font-size:15px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink);display:inline-flex;align-items:center;gap:44px}
.marq span::after{content:"";width:6px;height:6px;border-radius:50%;background:var(--lime)}
@keyframes slide{to{transform:translateX(-50%)}}

/* section */
.sec{padding:clamp(72px,10vw,120px) 0;position:relative;background:var(--paper)}
.sec.light{background:var(--paper2)}
.sec-head{max-width:720px;margin-bottom:52px}
.sec-head h2{font-size:clamp(30px,4.6vw,50px);font-weight:800;letter-spacing:-.02em;margin:18px 0 16px;color:var(--ink)}
.sec-head p{font-size:17px;color:var(--ink2)}

/* stats */
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:14px;overflow:hidden}
.stat{background:var(--card);padding:28px 24px}
.stat .n{font-family:'Archivo';font-weight:900;font-size:clamp(30px,4vw,44px);color:var(--ink)}
.stat .n b{color:var(--brand);font-weight:900}
.stat .l{font-family:'IBM Plex Mono';font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-top:8px}

/* capability grid */
.cap-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.cap{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:26px;transition:.28s;position:relative;overflow:hidden}
.cap::before{content:"";position:absolute;left:0;top:0;height:3px;width:0;background:var(--brand);transition:.3s}
.cap:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:rgba(125,192,66,.5)}
.cap:hover::before{width:100%}
.cap .ic{width:48px;height:48px;border-radius:11px;background:#e7f4ea;color:var(--brand);display:grid;place-items:center;margin-bottom:18px}
.cap h3{font-size:19px;font-weight:700;margin-bottom:9px;color:var(--ink)}
.cap p{font-size:14px;color:var(--ink2);line-height:1.6}

/* product catalog */
.cat-bar{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:34px}
.chip{font-family:'IBM Plex Mono';font-size:12.5px;letter-spacing:.03em;padding:9px 15px;border-radius:100px;
  border:1px solid var(--line);color:var(--ink2);background:var(--card);cursor:pointer;transition:.2s;display:inline-flex;gap:8px;align-items:center}
.chip:hover{border-color:var(--brand);color:var(--brand)}
.chip.on{background:var(--brand);color:#fff;border-color:var(--brand);font-weight:600}
.chip .ct{opacity:.55;font-size:11px}
.chip.on .ct{opacity:.8}
.prod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.prod{display:block;color:inherit;background:var(--card);border:1px solid var(--line);border-radius:13px;padding:20px;transition:.25s;position:relative;overflow:hidden}
.prod::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--lime);transform:scaleY(0);transform-origin:top;transition:.28s}
.prod:hover{transform:translateY(-3px);border-color:rgba(125,192,66,.55);box-shadow:var(--shadow)}
.prod:hover::before{transform:scaleY(1)}
.prod .pc{font-family:'IBM Plex Mono';font-size:10.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--brand);margin-bottom:11px;display:flex;justify-content:space-between;align-items:center;gap:10px}
.prod .pc .br{color:var(--muted);font-weight:500}
.prod h4{font-size:16.5px;font-weight:700;color:var(--ink);margin-bottom:7px;line-height:1.22}
.prod p{font-size:13px;color:var(--ink2);line-height:1.55}
.prod .inq{margin-top:13px;font-family:'IBM Plex Mono';font-size:11.5px;color:var(--brand);display:inline-flex;align-items:center;gap:5px;opacity:0;transform:translateY(4px);transition:.25s}
.prod:hover .inq{opacity:1;transform:none}
@media(max-width:960px){.prod-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.prod-grid{grid-template-columns:1fr}.prod .inq{opacity:1;transform:none}}

/* brand portfolio */
.folio{border-top:1px solid var(--line)}
.brandrow{border-bottom:1px solid var(--line);cursor:pointer;transition:.25s}
.brandrow:hover{background:#f4f8f1}
.brandrow .top{display:flex;align-items:center;gap:22px;padding:26px 4px}
.brandrow .idx{font-family:'IBM Plex Mono';font-size:12px;color:var(--brand);width:34px;flex:0 0 auto}
.brandrow .nm{font-family:'Archivo';font-weight:800;font-size:clamp(20px,3vw,30px);flex:1;letter-spacing:-.01em;color:var(--ink)}
.brandrow .est{font-family:'IBM Plex Mono';font-size:11.5px;color:var(--muted);letter-spacing:.14em;padding:5px 11px;border:1px solid var(--line);border-radius:100px;flex:0 0 auto}
.brandrow .pl{flex:0 0 auto;transition:.3s;color:var(--brand)}
.brandrow.open .pl{transform:rotate(45deg)}
.brandrow .body{max-height:0;overflow:hidden;transition:max-height .4s ease}
.brandrow.open .body{max-height:340px}
.brandrow .bodyin{padding:0 4px 30px 60px;max-width:820px}
.brandrow .bodyin p{color:var(--ink2);font-size:15.5px;line-height:1.65}
.brandrow .bodyin .tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}
.brandrow .bodyin .tag{font-family:'IBM Plex Mono';font-size:11px;letter-spacing:.08em;color:var(--brand);border:1px solid var(--line);border-radius:7px;padding:5px 10px}
.brandrow .bodyin .mfr{display:inline-flex;align-items:center;gap:6px;margin-top:18px;color:var(--emerald);font-size:13.5px;font-weight:600}
.brandrow .bodyin .mfr:hover{text-decoration:underline}

/* partner brands */
.partners{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.partner{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:34px;position:relative;overflow:hidden;transition:.28s}
.partner::before{content:"";position:absolute;left:0;top:0;height:4px;width:100%;background:linear-gradient(90deg,var(--lime),var(--brand))}
.partner:hover{box-shadow:var(--shadow);transform:translateY(-4px)}
.partner .p-top{display:flex;align-items:baseline;justify-content:space-between;gap:14px;margin-bottom:16px;flex-wrap:wrap}
.partner h3{font-family:'Archivo';font-weight:900;font-size:clamp(24px,3.4vw,34px);letter-spacing:-.01em;color:var(--ink)}
.partner .loc{font-family:'IBM Plex Mono';font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--brand);border:1px solid var(--line);border-radius:100px;padding:5px 12px;white-space:nowrap}
.partner .blurb{color:var(--ink2);font-size:15px;line-height:1.65}
.partner .points{display:flex;flex-direction:column;gap:9px;margin:20px 0 24px}
.partner .pt{display:inline-flex;align-items:center;gap:9px;font-size:14px;color:var(--ink);font-weight:500}
.partner .pt svg{color:var(--brand);flex:0 0 auto}
.partner .p-links{display:flex;gap:12px;flex-wrap:wrap}
.partner .p-btn{display:inline-flex;align-items:center;gap:7px;font-size:13.5px;font-weight:600;font-family:'IBM Plex Sans';padding:11px 16px;border-radius:9px;background:var(--brand);color:#fff;transition:.2s}
.partner .p-btn:hover{background:var(--brandDk);transform:translateY(-1px)}
.partner .p-btn:nth-child(2){background:transparent;color:var(--brand);border:1px solid var(--line)}
.partner .p-btn:nth-child(2):hover{border-color:var(--brand);background:#f0f7ec}
@media(max-width:960px){.partners{grid-template-columns:1fr}}

/* industries */
.ind-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
.ind{padding:26px 20px;border:1px solid var(--line);border-radius:14px;background:var(--card);transition:.25s}
.ind:hover{border-color:var(--brand);transform:translateY(-3px);box-shadow:var(--shadow)}
.ind .ic{color:var(--brand);margin-bottom:16px}
.ind h4{font-size:16px;font-weight:700;color:var(--ink);margin-bottom:6px}
.ind p{font-size:13px;color:var(--muted);line-height:1.5}

/* timeline */
.tl{position:relative;padding-left:0}
.tl .row{display:grid;grid-template-columns:120px 1fr;gap:28px;padding:26px 0;border-top:1px solid var(--line);align-items:start}
.tl .yr{font-family:'Archivo';font-weight:900;font-size:26px;color:var(--brand)}
.tl .row h4{font-size:19px;font-weight:700;margin-bottom:7px;color:var(--ink)}
.tl .row p{color:var(--ink2);font-size:15px;max-width:640px}

/* emergency (green accent block) */
.emg{background:linear-gradient(135deg,#0a7a3c,#075f2f);border-radius:22px;padding:clamp(34px,6vw,62px);text-align:center;position:relative;overflow:hidden;box-shadow:var(--shadow);color:#fff}
.emg .band{position:absolute;top:0;left:0;right:0;height:6px;background:repeating-linear-gradient(90deg,var(--lime) 0 30px,#075f2f 30px 42px)}
.emg .lab{font-family:'IBM Plex Mono';font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:#cdeeb0;display:inline-flex;gap:9px;align-items:center;justify-content:center}
.emg h2{font-size:clamp(28px,4.4vw,46px);font-weight:900;margin:16px 0 6px;color:#fff}
.emg .num{font-family:'IBM Plex Mono';font-weight:600;font-size:clamp(30px,6vw,58px);color:#fff;letter-spacing:.02em;margin:10px 0 4px;display:inline-block}
.emg p{color:rgba(255,255,255,.85);max-width:560px;margin:8px auto 30px}
.emg .btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.emg .btn-p{background:var(--lime);color:#08301a}
.emg .btn-p:hover{background:#8fd254;box-shadow:0 14px 30px -12px rgba(125,192,66,.6)}
.emg .btn-g{border-color:rgba(255,255,255,.45);color:#fff;background:rgba(255,255,255,.08)}
.emg .btn-g:hover{border-color:#fff;background:rgba(255,255,255,.16)}

/* contact */
.ct-grid{display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:start}
.ct .line{display:flex;gap:15px;padding:18px 0;border-bottom:1px solid var(--line);align-items:flex-start}
.ct .line .ic{color:var(--brand);margin-top:2px;flex:0 0 auto}
.ct .line .k{font-family:'IBM Plex Mono';font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:4px}
.ct .line .v{font-size:15.5px;color:var(--ink)}
.ct .line a.v:hover{color:var(--brand)}
.mapbox{border:1px solid var(--line);border-radius:16px;overflow:hidden;height:100%;min-height:340px;background:var(--paper2)}
.mapbox iframe{width:100%;height:100%;min-height:340px;border:0;filter:grayscale(.15) contrast(1.02)}
.coord{font-family:'IBM Plex Mono';font-size:12px;color:var(--muted);margin-top:14px;letter-spacing:.08em}

/* footer */
.foot{background:var(--paper3);border-top:1px solid var(--line);padding:60px 0 30px;color:var(--ink)}
.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px;margin-bottom:44px}
.foot h5{font-family:'IBM Plex Mono';font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin-bottom:18px}
.foot .fl{display:block;color:var(--ink2);font-size:14px;padding:6px 0;transition:.2s}
.foot .fl:hover{color:var(--brand)}
.foot .desc{color:var(--muted);font-size:14px;max-width:340px;margin-top:16px;line-height:1.6}
.foot-bot{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-top:26px;border-top:1px solid var(--line);color:var(--muted);font-size:12.5px;font-family:'IBM Plex Mono'}

/* reveal */
[data-reveal]{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)}
[data-reveal].in{opacity:1;transform:none}

/* responsive */
@media(max-width:960px){
  .navlinks{display:none}.burger{display:grid}.mobile.show{display:flex}
  .stats{grid-template-columns:repeat(2,1fr)}
  .cap-grid{grid-template-columns:repeat(2,1fr)}
  .ind-grid{grid-template-columns:repeat(2,1fr)}
  .ct-grid{grid-template-columns:1fr}
  .foot-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:560px){
  .cap-grid,.ind-grid{grid-template-columns:1fr}
  .stats{grid-template-columns:1fr 1fr}
  .tl .row{grid-template-columns:70px 1fr;gap:16px}
  .tl .yr{font-size:20px}
  .brandrow .bodyin{padding-left:4px}
  .foot-grid{grid-template-columns:1fr}
  .navcta{display:none}
}
@media(prefers-reduced-motion:reduce){
  *{animation:none!important}
  [data-reveal]{opacity:1;transform:none;transition:none}
}
`;

const CAPABILITIES = [
  { icon: Anchor, t: "Containment Booms & Barriers", d: "Self-inflatable, permanent and rapid-deploy floating booms to encircle and hold spills on open water, harbors and outfalls." },
  { icon: Waves, t: "Oil Skimmers", d: "Skimpak and weir-type skimmers that recover product from the water surface for fast, low-waste cleanup." },
  { icon: ShieldCheck, t: "Spill Kits — Bagged & SOPEP", d: "Grab-and-go bagged kits and IMO-compliant SOPEP marine kits, sized and stocked for your risk profile." },
  { icon: Filter, t: "Absorbents", d: "Absorbent pads, socks, pillows and booms — oil-selective media that lift heavy oil from water and hard surfaces." },
  { icon: FlaskConical, t: "Oil Spill Dispersants", d: "Water-based Formula 1111 and citrus-solvent Eurolube 3070 for surface treatment across a wide temperature range." },
  { icon: Container, t: "Secondary Containment", d: "Spill decks, pallets, berms and containment units that stop leaks at the source before they spread." },
  { icon: Droplets, t: "Turbidity & Silt Curtains", d: "Floating curtains, dredge barriers and baffle booms that control sediment during marine and dredging works." },
];

const PARTNERS = [
  { name: "Expandi Systems", loc: "Sweden · Spain",
    blurb: "A pioneer of the oil-spill world, Expandi Systems is a growing organization with production and engineering in Sweden and Spain and representatives worldwide. It invented and developed the Self-Inflatable Oil Boom, which has serviced over 800,000 metres of spill response across the globe — and keeps engineering equipment for spills big and small.",
    points: ["Self-Inflatable Oil Boom", "800,000 m+ deployed worldwide", "Incident-response consultation"],
    links: [ { label: "Website", url: "https://www.expandi.com" }, { label: "Self-Inflatable Oil Boom", url: "https://www.expandi.com" } ] },
  { name: "Parker Systems, Inc.", loc: "Chesapeake, Virginia",
    blurb: "For more than 40 years, Parker Systems, Inc. (PSI) has manufactured quality oil-spill cleanup and containment products, marketing and distributing worldwide from its manufacturing and warehouse facility in Chesapeake, Virginia. It specializes in oil-spill booms and curtains, plus sorbents, skimmers, spill kits and secondary containment.",
    points: ["Booms, curtains & barriers", "OilSnare & Skimpak skimmers", "Sorbents, kits & containment"],
    links: [ { label: "Website", url: "https://www.parkersystemsinc.com" }, { label: "Product range", url: "https://www.parkersystemsinc.com" } ] },
];

const INDUSTRIES = [
  { icon: Fuel, t: "Oil & Gas · Geothermal", d: "Rig, refinery and wellsite spill readiness." },
  { icon: Ship, t: "Marine & Ports", d: "SOPEP kits, harbor booms and skimmers." },
  { icon: Mountain, t: "Mining", d: "Fuel and reagent containment on-site." },
  { icon: Zap, t: "Power Generation", d: "Transformer and fuel-oil spill control." },
  { icon: Factory, t: "Manufacturing", d: "Secondary containment and workplace safety." },
];

const TIMELINE = [
  { y: "1970", h: "Our partners' roots", p: "Expandi pioneers the self-inflatable oil boom in Europe, while Parker Systems, Inc. begins manufacturing spill-cleanup and containment products in Chesapeake, Virginia." },
  { y: "800k m", h: "Proven at scale", p: "Expandi's self-inflatable boom goes on to service more than 800,000 metres of oil-spill response worldwide." },
  { y: "2010", h: "Lomar Supply Co., Inc. is established", p: "Founded in Parañaque as a full-service environmental supply house for the Philippine market, keeping inventory ready for emergency spills." },
  { y: "Today", h: "Two partners, one local supplier", p: "Lomar brings Expandi and Parker Systems equipment to the Philippines — Coast Guard-certified, in stock, and backed by free consultancy and a 24/7 hotline." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (ents) => ents.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.14 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function LomarSupply() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(0);
  const [activeCat, setActiveCat] = useState("All");
  useReveal();

  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onS);
    return () => window.removeEventListener("scroll", onS);
  }, []);

  const Boom = ({ n = 22 }) => (
    <div className="boom" aria-hidden>
      {Array.from({ length: n }).map((_, i) =>
        i % 3 === 0 ? <span key={i} className="float" /> : <span key={i} className="seg" />
      )}
    </div>
  );

  const links = [
    ["Capabilities", "#capabilities"],
    ["Products", "#products"],
    ["Partners", "#partners"],
    ["Industries", "#industries"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="lomar">
      <style>{CSS}</style>

      {/* NAV */}
      <nav className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="wrap">
          <div className="bar">
            <a href="#top" className="brand">
              <span className="mk" />
              <span>LOMAR SUPPLY<small>ENVIRONMENTAL SPILL RESPONSE</small></span>
            </a>
            <div className="navlinks">
              {links.map(([t, h]) => <a key={t} href={h}>{t}</a>)}
              <a href="tel:+639175216621" className="navcta"><Phone size={15} /> 24/7 Hotline</a>
            </div>
            <button className="burger" onClick={() => setMenu((m) => !m)} aria-label="Menu">
              {menu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <div className={"mobile" + (menu ? " show" : "")}>
            {links.map(([t, h]) => <a key={t} href={h} onClick={() => setMenu(false)}>{t}</a>)}
            <a href="tel:+639175216621" onClick={() => setMenu(false)}>Call 24/7 Hotline →</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="sheen" />
        <div className="grid-bg" />
        <div className="wrap">
          <div className="inner">
            <span className="h-tag"><span className="dot" /> Full-service environmental supply house · Philippines</span>
            <h1>Contain the spill.<br /><span className="a">Protect the water.</span></h1>
            <p className="lead">
              Lomar Supply Co., Inc. delivers oil-spill response equipment that industries can't afford to be without —
              booms, skimmers, sorbents and dispersants — Coast Guard-certified, in local stock, and backed by round-the-clock readiness.
            </p>
            <div className="hbtns">
              <a href="#capabilities" className="btn-p">Explore capabilities <ArrowUpRight size={18} /></a>
              <a href="mailto:customerservice@lomarsupply.com?subject=Quote%20request" className="btn-g">Request a quote</a>
            </div>
            <div className="readout">
              <span><span className="k">EST</span> <b>2010</b></span>
              <span>·</span>
              <span><span className="k">PARTNERS</span> <b>02</b></span>
              <span>·</span>
              <span><span className="k">HOTLINE</span> <b>+63 917 521 6621</b></span>
            </div>
          </div>
          <div className="boomrow"><Boom n={34} /></div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="marq" aria-hidden>
        <div className="track">
          {[0, 1].map((k) => (
            <span key={k}>
              Oil &amp; Gas <span /> Geothermal <span /> Marine &amp; Ports <span /> Mining <span /> Power Generation <span /> Manufacturing <span />
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="stats" data-reveal>
            <div className="stat"><div className="n"><b>2010</b></div><div className="l">Established · Parañaque</div></div>
            <div className="stat"><div className="n"><b>800k</b>m+</div><div className="l">Boom deployed worldwide*</div></div>
            <div className="stat"><div className="n">24<b>/</b>7</div><div className="l">Spill response hotline</div></div>
            <div className="stat"><div className="n"><b>5</b></div><div className="l">Core industries served</div></div>
          </div>
          <p className="coord" style={{ paddingTop: 14 }}>* Cumulative Expandi self-inflatable boom delivered globally since the 1970s.</p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="sec light" id="capabilities">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">What we supply</span>
            <h2>Everything a spill demands — in one supply house.</h2>
            <p>From the first alarm to final cleanup, Lomar stocks the equipment and consumables that keep a spill contained, recovered and documented.</p>
          </div>
          <div className="cap-grid">
            {CAPABILITIES.map((c, i) => {
              const Ic = c.icon;
              return (
                <div className="cap" data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }} key={c.t}>
                  <div className="ic"><Ic size={24} /></div>
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="sec" id="products">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">Product catalog</span>
            <h2>The full spill-response range, in stock.</h2>
            <p>In partnership with Expandi and Parker Systems, our booms and skimmers are made with top-quality materials and carry Philippine Coast Guard certification. Browse the range by category, then request a quote on any item.</p>
          </div>
          <div className="cat-bar" data-reveal>
            {[{ key: "All", label: "All products" }, ...CATEGORIES].map((c) => {
              const n = c.key === "All" ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === c.key).length;
              return (
                <button key={c.key} className={"chip" + (activeCat === c.key ? " on" : "")} onClick={() => setActiveCat(c.key)}>
                  {c.label} <span className="ct">{n}</span>
                </button>
              );
            })}
          </div>
          <div className="prod-grid">
            {PRODUCTS.filter((p) => activeCat === "All" || p.cat === activeCat).map((p) => (
              <a className="prod" href={`/products/${p.slug}`} key={p.slug}>
                <div className="pc"><span>{CAT_LABEL[p.cat]}</span><span className="br">{p.brand}</span></div>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <span className="inq">View product <ArrowUpRight size={13} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="sec" id="partners">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">Partner brands</span>
            <h2>Two world-class partners, one local supplier.</h2>
            <p>In partnership with Expandi and Parker Systems, Lomar supplies proven, internationally trusted spill-response equipment — held in local stock and carrying Philippine Coast Guard certification.</p>
          </div>
          <div className="partners">
            {PARTNERS.map((b) => (
              <div className="partner" data-reveal key={b.name}>
                <div className="p-top">
                  <h3>{b.name}</h3>
                  <span className="loc">{b.loc}</span>
                </div>
                <p className="blurb">{b.blurb}</p>
                <div className="points">
                  {b.points.map((pt) => (
                    <span className="pt" key={pt}><CircleDot size={13} /> {pt}</span>
                  ))}
                </div>
                <div className="p-links">
                  {b.links.map((l) => (
                    <a className="p-btn" href={l.url} target="_blank" rel="noreferrer" key={l.label}>
                      {l.label} <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="sec light" id="industries">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">Industries served</span>
            <h2>Built for operations that can't stop.</h2>
            <p>Lomar is focused on the sectors where a spill means downtime, liability and environmental risk — and where fast response is everything.</p>
          </div>
          <div className="ind-grid">
            {INDUSTRIES.map((n, i) => {
              const Ic = n.icon;
              return (
                <div className="ind" data-reveal style={{ transitionDelay: `${i * 60}ms` }} key={n.t}>
                  <div className="ic"><Ic size={30} /></div>
                  <h4>{n.t}</h4>
                  <p>{n.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT / TIMELINE */}
      <section className="sec" id="about">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">Our story</span>
            <h2>A supply house built on proven response.</h2>
            <p>Established in 2010, Lomar Supply grew into a full-service environmental supply house by partnering with world-class brands like Expandi and Parker Systems and keeping their equipment in stock — so availability is guaranteed when an emergency can't wait.</p>
          </div>
          <div className="tl" data-reveal>
            {TIMELINE.map((r) => (
              <div className="row" key={r.y}>
                <div className="yr">{r.y}</div>
                <div>
                  <h4>{r.h}</h4>
                  <p>{r.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="emg" data-reveal>
            <div className="band" />
            <span className="lab"><CircleDot size={14} /> Spill response hotline · 24/7</span>
            <h2>A spill just started. We answer.</h2>
            <a href="tel:+639175216621" className="num">+63 917 521 6621</a>
            <p>Lomar keeps inventory on hand for emergency spills — and offers free consultancy to match the right equipment to your location, purpose and budget. Call the hotline for immediate response, or send your requirements for a quote.</p>
            <div className="btns">
              <a href="tel:+639175216621" className="btn-p"><Phone size={18} /> Call the hotline</a>
              <a href="mailto:customerservice@lomarsupply.com?subject=Spill%20response%20enquiry" className="btn-g"><Mail size={17} /> Email us</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec" id="contact" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">Get in touch</span>
            <h2>Talk to Lomar Supply.</h2>
          </div>
          <div className="ct-grid" data-reveal>
            <div className="ct">
              <div className="line"><MapPin className="ic" size={20} /><div><div className="k">Head office</div><div className="v">200 Vitalez Ave., Vitalez Compound,<br />Brgy. San Isidro, Parañaque City, Metro Manila</div></div></div>
              <div className="line"><Phone className="ic" size={20} /><div><div className="k">Telephone</div><a className="v" href="tel:+6328024339">+63 2 802 4339</a> &nbsp;·&nbsp; <a className="v" href="tel:+6325868736">+63 2 586 8736</a></div></div>
              <div className="line"><Phone className="ic" size={20} /><div><div className="k">24/7 Spill hotline · Mobile</div><a className="v" href="tel:+639175216621">+63 917 521 6621</a> &nbsp;·&nbsp; <a className="v" href="tel:+639175327012">+63 917 532 7012</a></div></div>
              <div className="line"><Mail className="ic" size={20} /><div><div className="k">Email</div><a className="v" href="mailto:customerservice@lomarsupply.com">customerservice@lomarsupply.com</a></div></div>
              <div className="line"><Clock className="ic" size={20} /><div><div className="k">Availability</div><div className="v">Office Mon–Fri · Emergency response 24/7</div></div></div>
              <p className="coord">GEO 14.4648° N · 121.0115° E — PARAÑAQUE, PH</p>
            </div>
            <div className="mapbox">
              <iframe
                title="Lomar Supply location"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931.6734684424227!2d121.0115146918078!3d14.464756884219373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce41bb660dfd%3A0x5ea71ca1c302d9ee!2sLomar+Supply+Company+Inc!5e0!3m2!1sen!2sph!4v1557277493965!5m2!1sen!2sph"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap">
          <Boom n={30} />
          <div style={{ height: 40 }} />
          <div className="foot-grid">
            <div>
              <a href="#top" className="brand"><span className="mk" /><span>LOMAR SUPPLY<small>ENVIRONMENTAL SPILL RESPONSE</small></span></a>
              <p className="desc">The Philippines' full-service environmental supply house for oil-spill response — booms, skimmers, sorbents, dispersants and secondary containment, ready when it matters.</p>
            </div>
            <div>
              <h5>Explore</h5>
              {links.map(([t, h]) => <a className="fl" key={t} href={h}>{t}</a>)}
            </div>
            <div>
              <h5>Response</h5>
              <a className="fl" href="tel:+639175216621">24/7 Hotline</a>
              <a className="fl" href="mailto:customerservice@lomarsupply.com">Request a quote</a>
              <a className="fl" href="#capabilities">Spill kits</a>
              <a className="fl" href="#partners">Partner brands</a>
            </div>
          </div>
          <div className="foot-bot">
            <span>© {new Date().getFullYear()} LOMAR SUPPLY CO., INC. · ALL RIGHTS RESERVED</span>
            <span>PARAÑAQUE CITY · METRO MANILA · PHILIPPINES</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
