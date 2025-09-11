import RevealOnScroll from "../components/triger";
import Banner from "../components/banner";
import { Main, Title, Content, Card, BtnLink } from "../components/commons";

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
              <div className="grid grid-cols-1 lg:grid-cols-3  lg:gap-10 my-10">
                <Card>
                  Sou Ildealef H. Vicente da Silva, brasiliense de 28 anos,
                  apaixonadíssimo por tecnologia desde garoto. Como estudante de
                  Engenharia de Software, tenho o objetivo de me tornar o melhor
                  e mais competente profissional do mercado. A ideia de
                  solucionar problemas, automatizar tarefas, elevar o nível de
                  negócios, tudo isso utilizando da tecnologia, é
                  definitivamente algo que me empolga muito.
                </Card>
                <Card>
                  O meu contato com a programação antecede a minha matricula no
                  curso de Engenharia de Software. Tudo começou com OutSytems,
                  uma linguagem de programação lowcode que permite desenvolver
                  aplicações web e mobile de forma muito rápida, velocidade essa
                  que também que reflete na curva de aprendizado, o que acabou
                  me dando uma visão valiosa sobre logica de negócios e
                  arquitetura de desenvolvimento. Não levou muito tempo para, em
                  paralelo, acabar me interessando pelo desenvolvimento Web
                  Tradicional com HTML, CSS e JavaScript, o que naturalmente me
                  levou ao desenvolvimento frontend com React.js. E não
                  satisfeito, acabei expandindo meus conhecimetos para o
                  desenvolvimento back-end com Node.js, me tornando assim, um
                  desenvolvedor fullstack.
                </Card>
                <Card>
                  <p class="text-justify mb-5">
                    Dentre as minhas habilidades e conhecimetos você encontra:
                  </p>
                  <ul class="list-disc px-5">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>Node.js</li>
                    <li>Banco de dados SQL e NoSQL</li>
                    <li>API RESTfull</li>
                    <li>Git e GitHub</li>
                    <li>OutSytems</li>
                  </ul>
                </Card>
              </div>
              <img src="1.png" alt="" />
            </RevealOnScroll>
          </Content>
        </section>
        <section id="projects">
          <Content>
            <RevealOnScroll>
              <Title>Projetos</Title>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
                <img
                  src="royal.png"
                  alt=""
                  className="border border-solid border-gray-50/25"
                />
                <Card>
                  <h3 class="text-2xl mb-5">Royal Enfield</h3>
                  <p class="indent-8 text-justify mb-5">
                    Uma versão minha de um site da Royal Enfield. Construido com
                    React e uma API PHP para servir os dados, possibilitando
                    assim um site completo e dinamico.
                  </p>
                  <div class="flex w-full justify-center md:justify-start">
                    <BtnLink href={"https://royal-enfild-react.vercel.app/"}>
                      Visitar Projeto
                    </BtnLink>
                  </div>
                </Card>
              </div>
            </RevealOnScroll>
          </Content>
        </section>
        <section></section>
      </Main>
    </>
  );
};

export default Home;
