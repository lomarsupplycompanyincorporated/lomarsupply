import "./globals.css";

export const metadata = {
  title: "Lomar Supply Co., Inc. — Environmental Spill Response",
  description:
    "The Philippines' full-service environmental supply house for oil-spill response — booms, skimmers, absorbents, dispersants and secondary containment. Coast Guard-certified equipment, in local stock, with a 24/7 spill hotline.",
  openGraph: {
    title: "Lomar Supply Co., Inc. — Environmental Spill Response",
    description:
      "Oil-spill response equipment in partnership with Expandi and Parker Systems. Coast Guard-certified, in local stock, 24/7 hotline.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a7a3c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
