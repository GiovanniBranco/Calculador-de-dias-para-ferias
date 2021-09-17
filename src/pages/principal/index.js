import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import useStyles from "./styles";

function Principal() {
  const [dataFerias, setDataFerias] = useState("");
  const [diferenca, setDiferenca] = useState("");
  const [dataAtual, setDataAtual] = useState(new Date());
  const [esconder, setEsconder] = useState(false);
  const classes = useStyles();

  const calcularDiferença = () => {
    if (dataFerias !== "") {
      let dtFerias = new Date(dataFerias);
      const diff = Math.abs(dataAtual.getTime() - dtFerias.getTime());
      setDiferenca(Math.ceil(diff / (1000 * 60 * 60 * 24)));

      setEsconder(true);
    } else {
      alert("É necessário informar uma data!");
    }
  };

  const habilitarCampos = () => {
    limparData();
    setEsconder(false);
  };

  const limparData = () => {
    setDataFerias("");
  };

  return (
    <>
      <Container className={classes.container}>
        {esconder ? null : (
          <div classname={classes.containerTitulo}>
            <Typography variant="h3" component="h2" classname={classes.titulo}>
              Quando vai sair de férias?
            </Typography>
          </div>
        )}

        {esconder ? null : (
          <div>
            <TextField
              variant="outlined"
              margin="normal"
              className={classes.data}
              required
              InputLabelProps={{ required: true }}
              fullWidth
              id="data"
              type="date"
              name="data"
              onChange={(event) => setDataFerias(event.target.value)}
              value={dataFerias}
            />
          </div>
        )}
        {esconder ? null : (
          <div>
            <Button
              variant="contained"
              className={classes.botao}
              onClick={() => calcularDiferença()}
            >
              Calcular
            </Button>
          </div>
        )}
        {esconder ? (
          <div>
            <Typography variant="h3" component="h2" classname={classes.titulo}>
              Faltam {diferenca} para suas férias!!
            </Typography>
          </div>
        ) : null}

        {esconder ? (
          <div>
            <Button
              variant="contained"
              className={classes.botao}
              onClick={() => habilitarCampos()}
            >
              Calcular novamente
            </Button>
          </div>
        ) : null}
      </Container>
    </>
  );
}

export default Principal;
