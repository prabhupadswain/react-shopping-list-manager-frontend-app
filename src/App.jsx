import styles from "./App.module.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className={`container ${styles.appContainer}`}>
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
