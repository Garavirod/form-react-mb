import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
// Compoents
import Incorporaciones from '../components/Incorporacion';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "20px",
    background: "gold",
    height:'100vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  headerText: {
    textAlign: "center",
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    
   <div>
     <CssBaseline />
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <Typography
              variant="h4"
              component="h2"
              className={classes.headerText}
            >
              Incorporaciones y Desincorporaciones
            </Typography>            
          </Grid>
          <Grid item lg={6}>
            <Paper className={classes.paper}>
              <Typography variant="h6" component="h4">
                Desincorporacion / Entrada
              </Typography>
            </Paper>
            <Incorporaciones/>
          </Grid>
          <Grid item lg={6}>
            <Paper className={classes.paper}>
              <Typography variant="h6" component="h4">
                Incorporación / Salida
              </Typography>
            </Paper>
          </Grid>
        </Grid>
    </Container>
   </div>
  );
};

export default Form;
