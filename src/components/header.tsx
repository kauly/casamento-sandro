import * as React from "react";
import styled from "styled-components";
import { Menu as Burguer } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import ReactAudioPlayer from "react-audio-player";

const Header = styled.header`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background-color: ${props => props.theme.palette.primary.main};
  height: 15vh;
  opacity: 0.5;
  align-items: center;

  & svg {
    color: ${props => props.theme.palette.primary.contrastText};
    font-size: 3rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

function handleClick(ref: React.Ref<React.ReactElement>) {
  ref.current.style.width = "100%";
}

function HeaderPage(props) {
  const theme = useTheme();
  React.useEffect(() => {
    console.log(props.theme);
  }, []);
  return (
    <Header theme={theme}>
      <Burguer onClick={() => handleClick(props.menuRef)} />
      <div className="audio">
        <ReactAudioPlayer
          src="back_track.ogg"
          controls={true}
          autoPlay={true}
        />
      </div>
    </Header>
  );
}

export default HeaderPage;
