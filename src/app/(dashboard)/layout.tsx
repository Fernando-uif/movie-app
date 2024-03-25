import Link from "next/link";
import { Outfit } from "next/font/google";
import { Metadata } from "next";

import Icon from "@/app/components/icons/Icon";

import layoutStyles from "@/sass/layout/HomeLayout.module.scss";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={`${layoutStyles["homeLayout"]}`}>
      <nav className={`${layoutStyles["homeLayout__wrapperIcons"]}`}>
        <Link href={"/dashboard"}>
          <Icon
            name="movie"
            className={`${layoutStyles["homeLayout--background"]}`}
          />
        </Link>
        <div className={`${layoutStyles["homeLayout__icons"]}`}>
          <div>
            <Link href={"/dashboard"}>
              <Icon
                name="homeMovie"
                className={`${layoutStyles["homeLayout__icon"]}`}
              />
            </Link>
          </div>
          <div>
            <Link href={"/movies"}>
              <Icon
                name="movies"
                className={`${layoutStyles["homeLayout__icon"]}`}
              />
            </Link>
          </div>
          <div>
            <Link href={"/tv-series"}>
              <Icon
                name="tvSeries"
                className={`${layoutStyles["homeLayout__icon"]}`}
              />
            </Link>
          </div>
          <div>
            <Link href={"/favorites"}>
              <Icon
                name="bookmarkEmpty"
                className={`${layoutStyles["homeLayout__icon"]}`}
              />
            </Link>
          </div>
        </div>

        <div className={`${layoutStyles["homeLayout__profileImage"]}`} />
      </nav>
      {children}
    </section>
  );
}
