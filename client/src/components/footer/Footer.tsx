import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerWrapper}>
        <div className={s.footerPhotographs}>
          <p>
            Photographs by <a href="https://unsplash.com/">Unsplash</a>
          </p>
        </div>
        <ul className={s.footerLinks}>
          <div className={s.footerLinksColumn}>
            <h3>lorem</h3>
            <li>lorem</li>
            <li>lorem</li>
          </div>
          <div className={s.footerLinksColumn}>
            <h3>lorem</h3>
            <li>lorem</li>
            <li>lorem</li>
          </div>
        </ul>
      </div>
    </footer>
  );
}
