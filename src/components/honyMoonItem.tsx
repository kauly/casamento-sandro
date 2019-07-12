import * as React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
const coleseum = require("../imgs/coloseum.png");
import { useTheme } from "@material-ui/core/styles";

const StyledCard = styled(Card)`
  max-width: 345px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCardAction = styled(CardActions)`
  display: flex;
  flex-direction: column;
`;

const StyledPrice = styled(Paper)`
  background-color: #ff7675;
  width: 100%;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-left: 0;
`;

interface IItemProps {
  text: string;
  title: string;
  price?: string;
  img?: any;
}

function HoneyMoonItem(props: IItemProps) {
  const theme = useTheme();
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={coleseum}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <StyledCardAction disableSpacing>
        <Box
          marginY={1}
          paddingY={1}
          borderRadius={3}
          display="flex"
          justifyContent="center"
          width="100%"
          bgcolor={theme.palette.secondary}
          color={theme.palette.secondary.contrastText}
        >
          {`R$ ${props.price}`}
        </Box>

        <StyledButton color="primary" variant="contained" fullWidth>
          comprar
        </StyledButton>
      </StyledCardAction>
    </StyledCard>
  );
}

export default HoneyMoonItem;
