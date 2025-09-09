import RevealOnScroll from "../components/triger";
import Banner from "../components/banner";
import { Main, Title, Content } from "../components/commons";

const Home = () => {
  return (
    <>
      <div id="home"></div>
      <Banner />
      <Main>
        <section id="about">
          <Content>
            <RevealOnScroll>
              <Title>Sobre mim</Title>
            </RevealOnScroll>
          </Content>
        </section>
        <section id="projects">
          <Content>
            <RevealOnScroll>
              <Title>Projetos</Title>
            </RevealOnScroll>
          </Content>
        </section>
      </Main>
    </>
  );
};

export default Home;
