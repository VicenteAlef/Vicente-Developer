import RevealOnScroll from "../components/triger";
import Banner from "../components/banner";
import { Main, Title, Content, Card } from "../components/commons";

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
              <img src="Shotgun.png" alt="" className="mt-50" />
              <Card>
                Teste asdjak dkllm e kjksdajfd k e ckjdlsdkfj dk fsjkdjhfso dfh
                osf os
              </Card>
            </RevealOnScroll>
          </Content>
        </section>
        <section id="projects">
          <Content>
            <RevealOnScroll>
              <Title>Projetos</Title>
              <img src="SuperMeteor.png" alt="" className="mt-50" />
            </RevealOnScroll>
          </Content>
        </section>
      </Main>
    </>
  );
};

export default Home;
