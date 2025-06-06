import styles from "./Footer.module.css";
const Footer = () => {
  const today = new Date();

  return (
    <footer className={`bg-secondary-subtle ${styles.footerStyle}`}>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
