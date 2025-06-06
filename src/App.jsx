import styles from "./App.module.css";
import Header from "./components/ui/Header";
import Content from "./components/shopping-list/Content";
import Footer from "./components//ui/Footer";

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
