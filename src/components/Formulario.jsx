import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
// Components
import Desincorporacion from "./Desincorporacion";
import Incorporacion from "./Incorporacion";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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

export default function Formulario() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const superData = (props) => {
    console.log("Desde el padre ",props);
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
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
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Desincorporaciones" {...a11yProps(0)} />
              <Tab label="Incorporaciones" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <form>
            <Card>
              <CardContent>
                <TabPanel value={value} index={0}>
                  <Desincorporacion getDataRegistro={superData} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Incorporacion />
                </TabPanel>
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
      </Grid>
    </Container>
  );
}
