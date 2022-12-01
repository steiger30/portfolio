import styled from "styled-components";

export const Header = styled.header`
  grid-row: header;
  grid-column: span 14;
  /* border: 1px solid red; */
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 27px;
    font-weight: 600;
  }
`;

export const Footer = styled.footer`
  grid-row: footer;
  grid-column: span 14;
  /* border: 1px solid red; */
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
export const Sobre = styled.div`
  grid-row: Sobre;
  grid-column: span 7;
  /* border: 1px solid red; */
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
`;
export const ContainerImg = styled.div`
  grid-row: Sobre;
  grid-column: span 7;
  /* border: 1px solid red; */
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Resumo = styled.div`
  grid-row: resumo;
  grid-column: span 14;
  /* border: 1px solid red; */
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
  }
`;
export const Habilidades = styled.div`
  grid-row: habilidades;
  grid-column: span 14;
  /* border: 1px solid red; */
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
  /* h1{
    margin-top: 30px;
  } */
`;
export const Projetos = styled.div`
  grid-row: projetos;
  grid-column: span 14;
  /* border: 1px solid red; */
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
  background-color: #212121;
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
  h1 {
    font-size: 1rem;
    font-weight: 600;
    color: #c69f25;
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
    background: #c69f25;
    cursor: pointer;
    :hover {
      /* filter: sepia(100%);  */
    }
  }
`;
