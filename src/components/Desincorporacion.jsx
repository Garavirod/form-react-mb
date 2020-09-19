import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useForm } from "../hooks/useForm";
import { ModelDesincorporacion } from "../models/Desincorp";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const folios = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

// const lineas = [
//   "Linea 1",
//   "Linea 2",
//   "Linea 3",
//   "Linea 4",
//   "Linea 5",
//   "Linea 6",
//   "Linea 7",
// ];

export const Desincorporacion = () => {
  const classes = useStyles();

  const initial_desinc = ModelDesincorporacion();
  
  const [values, handleInputChange] = useForm(initial_desinc);
  const {
    folio,
    // linea,
    // solicita,
    // informa,
    // estacion,
    // economico,
    // empresa,
    // motivo,
    odometro,
    credencial,
    nombre,
    fecha,
    hora,
    jornada,
    observaciones,
    tipo,
    edoFolio,
    // tree,
    // ida,
    // regreso,
  } = values;

  console.log(values);

  return (
    <Grid container spacing={3}>
      <Grid item lg={12}>
        <Paper className={classes.paper} variant="outlined">
          <Typography variant="h6" component="h4">
            Desincorporacion / Entrada
          </Typography>
        </Paper>
      </Grid>
      <Grid item lg={12}>
        {/* SELECTS INPUTS */}        
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"          
          value={folio}
          onChange={handleInputChange}
          input={<Input />}
          MenuProps={MenuProps.PaperProps}
          name="folio"
        >
          {folios.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>    
      </Grid>
      <Grid item lg={4}>
        {/* ODÓMETRO */}
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-required"
            label="Odómetro"
            name="odometro"
            value={odometro}
            onChange={handleInputChange}
          />
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        {/* CREDENCIAL */}
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-required"
            label="Credencial"
            name="credencial"
            value={credencial}
            onChange={handleInputChange}
          />
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        {/* NOMBRE */}
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-required"
            label="Nombre"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        {/* FECHA */}
        <FormControl className={classes.formControl}>
          <TextField
            id="date"
            name="fecha"
            label="Birthday"
            type="date"
            value={fecha}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        {/* HORA */}
        <FormControl className={classes.formControl}>
          <TextField
            id="time"
            name="hora"
            label="Alarm clock"
            type="time"
            value={hora}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        {/* JORNADA */}
        <FormControl className={classes.formControl}>
          <TextField
            id="time"
            name="jornada"
            label="Alarm clock"
            type="time"
            value={jornada}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </FormControl>
      </Grid>
      <Grid item lg={8}>
        {/* OBSERVACIONES */}
        <FormControl fullWidth className={classes.root}>
          <TextField
            id="outlined-multiline-static"
            onChange={handleInputChange}
            label="Observaciones"
            multiline
            rows={3}
            variant="outlined"
            fullWidth
            margin="normal"
            name="observaciones"
            value={observaciones}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </Grid>
      <Grid item lg={2}>
        {/* TIPO DESINCO*/}
        <FormControl className={classes.formControl}>
          <FormLabel>Tipo</FormLabel>
          <RadioGroup
            aria-label="gender"
            onChange={handleInputChange}
            name="tipo"
            value={tipo}
          >
            <FormControlLabel
              value="Incumplido"
              control={<Radio />}
              label="Incumplido"
            />
            <FormControlLabel value="Apoyo" control={<Radio />} label="Apoyo" />
            <FormControlLabel
              value="Afectación"
              control={<Radio />}
              label="Afectacións"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item lg={2}>
        {/* ESTADO FOLIO */}
        <FormControl className={classes.formControl}>
          <FormLabel>Estado de foilo</FormLabel>
          <RadioGroup
            aria-label="gender"
            value={edoFolio}
            onChange={handleInputChange}
            name="edoFolio"
          >
            <FormControlLabel
              value="Abierto"
              control={<Radio />}
              label="Abierto"
            />
            <FormControlLabel
              value="Cerrado"
              control={<Radio />}
              label="Cerrado"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      {/* <Grid item lg={12}>
        <Paper className={classes.paper} elevation={3} variant="outlined">
          <Typography variant="h6" component="h4">
            Referencia
          </Typography>
        </Paper>
      </Grid>       */}
    </Grid>
  );
}
