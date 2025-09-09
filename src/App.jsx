import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/home";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/whatsbtn";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <WhatsAppBtn href="https://wa.me/+5561982070086" />
    </>
  );
}

export default App;
