import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  Typography
} from "@material-ui/core";
import { ModelDesincorporacion } from "../models/Desincorp";
import { useForm } from "../hooks/useForm";
import { DesincorporacionComp } from "./DesincorporacionComp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: "20px",
  },
  conatiner: {
    flexGrow: 1,
    margin: "20px",
    background: "lime",
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

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.root}>
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
            <Card>
              <CardContent>
                <Grid item lg={12}>
                  <DesincorporacionComp
                    valuesDes={valuesDes}
                    handleInputChangeDes={handleInputChangeDes}
                    resetDes={resetDes}
                  />
                </Grid>
                <Grid item lg={12}>
                  <h2>Incorporacion</h2>
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
            </Card>
          </form>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
