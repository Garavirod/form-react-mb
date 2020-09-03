import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
// Tapbar
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

// Components
import Desincorporacion from "./Desincorporacion";
// import Incorporacion from "./Incorporacion";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: "20px",
  },
  acordion: {
    width: "100%",
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Formulario() {
  const classes = useStyles();

  const superData = (props) => {
    console.log("Desde el padre ", props);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sendData = (e)=>{
    e.preventDefault();
    console.log("Data a mandar");
    
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
          <form onSubmit={sendData}>
            <Card>
              <CardContent>
                <div className={classes.root}>
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
                  <TabPanel value={value} index={0}>
                    <Desincorporacion getDataRegistro={superData} />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    Item Two
                  </TabPanel>
                </div>
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

{
  /* <div className={classes.acordion}>
<Accordion>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-label="Expand"
    aria-controls="additional-actions1-content"
    id="additional-actions1-header"
  >
    <FormControlLabel
      aria-label="Acknowledge"
      onClick={(event) => event.stopPropagation()}
      onFocus={(event) => event.stopPropagation()}
      control={<Checkbox />}
      label="DESINCORPORACIONES"
    />
  </AccordionSummary>
  <AccordionDetails>
    <Desincorporacion getDataRegistro={superData} />
  </AccordionDetails>
</Accordion>
<Accordion>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-label="Expand"
    aria-controls="additional-actions2-content"
    id="additional-actions2-header"
  >
    <FormControlLabel
      aria-label="Acknowledge"
      onClick={(event) => event.stopPropagation()}
      onFocus={(event) => event.stopPropagation()}
      control={<Checkbox />}
      label="INCORPORACIONES"
    />
  </AccordionSummary>
  <AccordionDetails>
    <Incorporacion />
  </AccordionDetails>
</Accordion>
</div> */
}
