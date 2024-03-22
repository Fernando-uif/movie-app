import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${outfit.className}`}>{children}</body>;
    </html>
  );
}
