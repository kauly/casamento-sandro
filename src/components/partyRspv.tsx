import * as React from "react";
import { TextField, Button, Paper, Box } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import styled from "styled-components";

interface IRspvValues {
  name: string;
  plus: string;
}

interface IPartyRspv {
  dir: string;
}

const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 10px;
  padding: 20px;
  & .margin {
    margin-bottom: 20px;
  }
  & .icon {
    margin-left: 10px;
  }
`;

function PartyRspv(props: IPartyRspv) {
  const [values, setValues] = React.useState<IRspvValues>({
    name: "",
    plus: ""
  });
  const handleChange = (name: keyof IRspvValues) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Container dir={props.dir}>
      <TextField
        label="Nome"
        value={values.name}
        onChange={handleChange("name")}
        fullWidth
        className="margin"
      />
      <TextField
        label="Acompanhante"
        value={values.plus}
        onChange={handleChange("plus")}
        fullWidth
        className="margin"
      />
      <Box width="80px">
        <Button variant="contained" color="primary" size="large">
          Enviar
          <Send className="icon" />
        </Button>
      </Box>
    </Container>
  );
}

export default PartyRspv;
