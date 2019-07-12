import * as React from "react";
import styled from "styled-components";
import { useTheme } from "@material-ui/styles";

const Container = styled.div`
  padding: 20px;
  font-size: 25px;
  line-height: 150%;
  overflow-wrap: break-word;
  overflow: auto;
  background-color: ${props => props.theme.palette.primary[50]};
  color: ${props => props.theme.palette.primary[50].contrastColor};
  opacity: 0.3;

  @media (max-width: 768px) {
    font-size: 20px;
    & span {
      font-size: 30px;
    }
  }

  & span {
    display: block;
    font-size: 32px;
    overflow-wrap: break-word;
  }
  & .top {
    margin-bottom: 20px;
  }
  & .bottom {
    margin-top: 20px;
  }
`;

function TextContainer() {
  const theme = useTheme();
  return (
    <Container theme={theme}>
      <span className="top">
        Sejam bem-vindos ao nosso ambiente de recepção virtual.
      </span>
      Para nós sua presença, tanto aqui, como em nossa cerimônia de casamento
      são de grande importância. Gostaríamos de compartilhar com vocês este
      instante mágico. Gostaríamos também de vê-los tão felizes com nossa união,
      quanto estamos em vê-los por perto, vivendo conosco nossa felicidade.
      Celebrar nossa união perante a presença de nossos amigos e familiares será
      a realização de um sonho que alimentamos juntos desde o início de nossa
      vida a dois. E, como não poderia ser diferente, querer incluir você em
      nossa memória também torna-se algo essencial e natural em nossas vidas.
      <span className="bottom">Esperamos a todos e vamos comemorar!</span>
    </Container>
  );
}

export default TextContainer;
