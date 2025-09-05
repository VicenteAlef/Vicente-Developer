import Banner from "./components/banner";
import WhatsAppBtn from "./components/whatsbtn";
import Footer from "./components/Footer";
import { Main, Title } from "./components/commons";

function App() {
  return (
    <>
      <Banner />
      <Main>
        <Title>Sobre mim</Title>
      </Main>
      <Footer />
      <WhatsAppBtn />
    </>
  );
}

export default App;
