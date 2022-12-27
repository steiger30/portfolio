import styled from "styled-components";

export const Header = styled.header`
  grid-row: header;
  grid-column: 1 / -1;

  border: 1px solid red;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    grid-column: span 5;
  }
  h1 {
    font-size: 27px;
    font-weight: 600;
  }
`;
export const HeigthSection = styled.div`
  height: 440px !important;
`;
export const Footer = styled.footer`
  grid-row: footer;
  grid-column: 1 / -1;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 27px;
    font-weight: 600;
  }
`;
export const Sobre = styled(HeigthSection)`
  grid-row: Sobre;
  grid-column-start: 8;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 500;
  }
  p {
    color: #9a9a9a;
    font-size: 18px;
  }
  #nome-dev {
    background: linear-gradient(90deg, #eb2f70 0.2%, #fb4e60 100%);
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  div {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 800px) {
    grid-column: 1 / -1;
    height: auto !important ;
  }
`;
export const ContainerImg = styled(HeigthSection)`
  grid-row: Sobre;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-column-start: 6;

  @media (max-width: 800px) {
    grid-row: SobreImg;
    grid-column: 1 / -1;
    height: auto !important;
  }
`;
export const Resumo = styled.div`
  grid-row: resumo;
  grid-column: 1 / -1;
  /* border: 1px solid; */
  background: #121212;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    width: 60%;
    color: #828282;
    font-family: "DM Sans", sans-serif;
    font-size: 1.1rem;
    text-align: center;
    line-height: 180%;
    @media (max-width: 800px)  {
      width: 98%;
      font-size: 0.8rem;
    }
  }
`;
export const Habilidades = styled.div`
  grid-row: habilidades;
  grid-column: 1 / -1;
  /* border: 1px solid; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    width: 60%;
  }
  #containerCard {
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;
export const Projetos = styled.div`
  grid-row: projetos;
  grid-column: 1 / -1;
  /* border: 1px solid; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    width: 60%;
  }
`;
export const Btn = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 50rem;
  font-size: 15px;
  color: #ffff;
  font-weight: 700;
`;
export const ButtonCv = styled(Btn)`
  background: linear-gradient(90deg, #eb2f70 0.2%, #fb4e60 100%);
  margin-right: 5px;
`;
export const ButtonContato = styled(Btn)`
  background: none;
  border: 1px solid #eb2f70;
  margin-left: 5px;
`;
export const Cards = styled.div`
  text-align: center;
  background-color: #4b4b4b;
  position: relative;
  width: 7rem;
  aspect-ratio: 1;
  border-top-right-radius: 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  filter: grayscale(1);

  :hover {
    filter: none;
  }
  h1 {
    font-size: 1rem;
    font-weight: 600;
    color: #e6bb17;
    margin-bottom: 1rem;
  }
  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.3rem;
    background-image: linear-gradient(90deg, #eb2f70 0%, #fb4e60 92.32%);
    bottom: -0.1rem;
    left: 0;
  }
`;

export const Contatos = styled.div`
  display: flex;
  div {
    display: flex;
    padding: 15px;
    border-radius: 5rem;
    margin: 8px;
    flex-direction: column;
    align-items: center;
    background: #c9c9c9;
    cursor: pointer;
    :hover {
      /* filter: sepia(100%);  */
    }
  }
`;

export const CardsProjetos = styled.div``;
