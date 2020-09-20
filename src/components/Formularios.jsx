import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  Typography,
} from "@material-ui/core";

import { useForm } from "../hooks/useForm";
import { DesincorporacionComp } from "./DesincorporacionComp";
import { IncorporacionComp } from "./IncorporacionComp";
import { ModelDesincorporacion, ModelIncorporacion } from "../models/ModelsIncorporacion";

const useStyles = makeStyles((theme) => ({
  conatiner: {
    flexGrow: 1,
    height: "100vh",
  },
  headerText: {
    textAlign: "center",
  },
}));

export default function Formularios() {
  const classes = useStyles();

  const [valuesDes, handleInputChangeDes, resetDes] = useForm(
    ModelDesincorporacion
  );

  const [valuesInco, handleInputChangeInc, resetInc] = useForm(
    ModelIncorporacion
  );

  console.log(valuesInco);

  return (
    <Container maxWidth="lg" className={classes.conatiner}>
      <Card>
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <Typography
              variant="h6"
              component="h4"
              className={classes.headerText}
            >
              Incorporaciones y Desincorporaciones
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <form>
              <CardContent>
                <Grid item lg={12}>
                  <DesincorporacionComp
                    valuesDes={valuesDes}
                    handleInputChangeDes={handleInputChangeDes}
                    resetDes={resetDes}
                  />
                </Grid>
                <Grid item lg={12}>
                <IncorporacionComp
                    valuesInco={valuesInco}
                    handleInputChangeInc={handleInputChangeInc}
                    resetInc={resetInc}
                  />
                </Grid>
                <Grid item lg={12}>
                  <h2>Referencia</h2>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Guardar
                </Button>
                <Button size="small" variant="contained" color="primary">
                  Cancelar
                </Button>
                <Button size="small" variant="contained" color="primary">
                  Nuevo folio
                </Button>
              </CardActions>
            </form>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
