import RevealOnScroll from "../components/triger";
import Banner from "../components/banner";
import {
  Main,
  Title,
  Content,
  Card,
  BtnLink,
  SubTitle,
} from "../components/commons";

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
                  className="border border-solid border-gray-50/25 rounded-md"
                />
                <Card>
                  <SubTitle>Royal Enfield</SubTitle>
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
        <section className="mb-20">
          <RevealOnScroll>
            <Title>Quer ver mais projetos?</Title>
            <Card>
              <SubTitle>É aqui que a mágica acontece</SubTitle>
              <p class="text-justify mb-5">
                No meu GitHub você encotra inumeros projetos que vão do frontend
                ao backend. Desde projetos mais simples e diretos, feitos com
                HTML, CSS e JavaScript, a projetos mais elaborados construidos
                com React,Tailwind, sistemas de roteamento, backend feitos com
                Node.js, banco de dados SQL, autenticação e muito mais.
              </p>
              <div class="flex w-full justify-center md:justify-start">
                <BtnLink>
                  Visitar Perfil no GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </BtnLink>
              </div>
            </Card>
          </RevealOnScroll>
        </section>
      </Main>
    </>
  );
};

export default Home;
