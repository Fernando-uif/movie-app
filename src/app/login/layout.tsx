import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className={`${outfit.className}`}>{children}</section>;
    </>
  );
}
