import "./App.css";
import FirstPage from "./components/firstPage";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Pricing from "./components/pricing";
import SecondPage from "./components/secondPage";
import Slider from "./components/slider";
import ThirdPage from "./components/thirdPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstPage />
      <Slider />
      <SecondPage />
      <ThirdPage />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
