import Icon from "@/components/icons/Icon";
import layoutStyles from "@/sass/layout/HomeLayout.module.scss";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={`${layoutStyles["homeLayout"]}`}>
      <nav className={`${layoutStyles["homeLayout__wrapperIcons"]}`}>

          <Icon
            name="movie"
            className={`${layoutStyles['homeLayout--background']}`}
          />


        <div className={`${layoutStyles["homeLayout__icons"]}`}>
          <div>
            <Icon
              name="movies"
              className={`${layoutStyles["homeLayout__icon"]}`}
            />
          </div>
          <div>
            <Icon
              name="homeMovie"
              className={`${layoutStyles["homeLayout__icon"]}`}
            />
          </div>
          <div>
            <Icon
              name="tvSeries"
              className={`${layoutStyles["homeLayout__icon"]}`}
            />
          </div>
          <div>
            <Icon
              name="bookmarkEmpty"
              className={`${layoutStyles["homeLayout__icon"]}`}
            />
          </div>
        </div>

        <div className={`${layoutStyles["homeLayout__profileImage"]}`} />
      </nav>
      {children}
    </section>
  );
}
