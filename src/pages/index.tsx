import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import * as styles from "../../styles/pages/styles";
import "aos/dist/aos.css";
import { constants } from "buffer";
import Link from "next/link";

export default function Home() {
  const data = [
    { nome: "Angular", src: "/icons/angularjs-original.svg" },
    { nome: "HTML5", src: "/icons/html5-original.svg" },
    { nome: "CSS3", src: "/icons/css3-original.svg" },
    { nome: "JavaScript", src: "/icons/javascript-plain.svg" },
    { nome: "TypeScript", src: "/icons/typescript-plain.svg" },
    { nome: "Next.js", src: "/icons/nextjs-line.svg" },
    { nome: "C#", src: "/icons/csharp-original.svg" },
    { nome: "Material UI", src: "/icons/materialui-original.svg" },
    { nome: "Postgresql", src: "/icons/postgresql-original.svg" },
  ];
  const dataHabilidades = [
    {
      nome: "MindBooster",
      text: "MindBooster é um jogo de memorizar podendo ser utilizar diferentes tipos de assuntos.",
      src: "/projetos/MindBooster.png",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <>
      <Head>
        <title>Renan Steiger</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="main">
        {/* <styles.Header>
          <Image
            src="/my-icon/logo.png"
            alt="Picture of the author"
            width={80}
            height={50}
          />
          <div>
            <div>
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Habilidades</a>
                </li>
                <li>
                  <a>Projetos</a>
                </li>
                <li>
                  <a>Contatos</a>
                </li>
              </ul>
            </div>
          </div>
        </styles.Header> */}
        <styles.ContainerImg data-aos="fade-up">
          <Image
            src="/images/mf-avatar.svg"
            alt="Picture of the author"
            width={250}
            height={250}
          />
        </styles.ContainerImg>
        <styles.Sobre data-aos="fade-up">
          <h1>Olá, eu sou o </h1>
          <h1 id="nome-dev">Renan Steiger </h1>
          <p>Desenvolvedor Web</p>
        </styles.Sobre>
        <styles.Resumo>
          <h1 id="title-section">Sobre mim</h1>
          <p>
            Desenvolvedor Front-end com experiência em Angular, Next.js,
            JavaScript, TypeScript, Styled Components, Material UI e consumo de
            APIs REST. Apaixonado pelo desenvolvimento de componentes
            reutilizáveis. Também possui experiência em projetos gerenciados por
            Metodologias Ágeis. Cursando Bacharelado em Engenharia de Software
            na Universidadetecnológica Federal do Paraná, Cornélio Procópio..
          </p>
        </styles.Resumo>
        <styles.Habilidades>
          <h1 id="title-section">Habilidades</h1>
          <div id="containerCard">
            {data.map((valor) => (
              <>
                <styles.Cards key={valor.nome}>
                  <h1>{valor.nome}</h1>
                  <Image
                    src={valor.src}
                    alt="Picture of the author"
                    width={40}
                    height={40}
                  />
                </styles.Cards>
              </>
            ))}
          </div>
        </styles.Habilidades>
        <styles.Projetos>
          <h1 id="title-section">Projetos</h1>
          <div id="containerCard">
            {dataHabilidades.map((valor) => (
              <>
                <styles.CardsProjetos key={valor.nome}>
                  <div>
                    <Image
                      src={valor.src}
                      alt="Picture of the author"
                      width={234}
                      height={124}
                    />
                  </div>
                  <span>
                    <h1>{valor.nome}</h1>
                    <p>{valor.text}</p>
                    <Link href="https://github.com/steiger30/MindBooster">Ver projeto</Link>
                  </span>
                </styles.CardsProjetos>
              </>
            ))}
          </div>
        </styles.Projetos>
        <styles.Footer className="footer">
          <h1 id="title-section">Contatos</h1>
          <styles.Contatos>
            <Link href="mailto:renansteiger@live.com">
              <div>
                <Image
                  src="/icons_redesS/email.png"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </div>
            </Link>
            <Link href="tel:+5543920013896">
              <div>
                <Image
                  src="/icons_redesS/telephone.png"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/renan-steiger-36574314b/">
              <div>
                <Image
                  src="/icons_redesS/linkedin.png"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </div>
            </Link>
            <Link href="https://github.com/steiger30">
              <div>
                <Image
                  src="/icons_redesS/github.png"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </div>
            </Link>
          </styles.Contatos>
        </styles.Footer>
      </div>
    </>
  );
}
