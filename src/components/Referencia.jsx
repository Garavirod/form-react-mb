import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Referencia() {
  const classes = useStyles();
 

  return (
    <Grid container spacing={3}>
      <Grid item lg={12}>
        <Card className={classes.root}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item lg={6}>
                  <h1>Hola</h1>
              </Grid>
              <Grid item lg={6}>
                  <h2>Adios</h2>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
