import MenuList from "./components/MenuList";
import Navbar from "./components/Navbar";
import Header from "./components/Hero";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <MenuList />
      <Footer />
    </div>
  );
};

export default App;
