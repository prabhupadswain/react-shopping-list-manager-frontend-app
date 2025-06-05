import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className="bg-dark-subtle">
      <h1 className={styles.headerStyle}>Shopping List</h1>
    </header>
  );
};

export default Header;
