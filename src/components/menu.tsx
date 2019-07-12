import * as React from "react";
import styled from "styled-components";
import { Close } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";

const MenuContainer = styled.div`
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 9999;
  left: 0;
  top: 0;
  background-color: ${props =>
    props.theme.palette.primary.main}; /* Black fallback color */

  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
`;

const MenuList = styled.div`
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px;
`;

const MenuItem = styled.a`
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
  text-transform: uppercase;
  margin-bottom: 30px;
  color: ${props => props.theme.palette.primary.contrastText};

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scaleY(1.5);
  }
  &:visited {
    color: ${props => props.theme.palette.primary.contrastText};
  }
`;

const StyledClose = styled(Close)`
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

const Menu = React.forwardRef((props, ref) => {
  const theme = useTheme();
  return (
    <MenuContainer ref={ref} theme={theme}>
      <StyledClose onClick={() => props.handleClose(ref)} />
      <MenuList>
        <MenuItem
          href="#party"
          onClick={() => props.handleClose(ref)}
          theme={theme}
        >
          Festa
        </MenuItem>
        <MenuItem
          href="#honeymoon"
          onClick={() => props.handleClose(ref)}
          theme={theme}
        >
          Lua de Mel
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
});

export default Menu;
