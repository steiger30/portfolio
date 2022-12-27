import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body{
    background: #13131f;
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      color: white;
    }
    font-family: 'DM Sans', sans-serif;
  }
#main{
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: [header] 100px [SobreImg] auto [Sobre] auto [resumo] 300px [habilidades] auto [projetos] 400px [footer] 300px;

    @media (max-width: 950px) {  grid-template-columns: repeat(8, 5fr); }
  }
  #title-section{
    font-size: 30px;
    color: #F9F9F9;
    font-weight: 600;
    margin-bottom: 20px;
  }

  body{
    margin: 0 !important;
  }
`;
