import "./App.css";
import FirstPage from "./components/firstPage";
import Navbar from "./components/navbar";
import SecondPage from "./components/secondPage";
import Slider from "./components/slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstPage />
      <Slider />
      <SecondPage />
    </div>
  );
}

export default App;
