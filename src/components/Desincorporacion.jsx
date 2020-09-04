import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import Input from "@material-ui/core/Input";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";

// import Referencia from "./Referencia";
import { getFolios, getLienas } from "../selectors/DataSelector";

// Hooks
import { useForm } from "../hooks/useForm";
// Models
import { structDataDesinc } from "../models/Desincorp";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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
    // textAlign: "center",
    color: theme.palette.text.secondary,
    // background : 'green'
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

const folios = getFolios();
const lineas = getLienas();

const selectInputsTag = [
  { tagName: "Folio", data: folios, modelName: "folio" },
  { tagName: "Linea", data: lineas, modelName: "linea" },
  { tagName: "Solicita", data: folios, modelName: "solicita" },
  { tagName: "Informa", data: folios, modelName: "informa" },
  { tagName: "Estacion", data: folios, modelName: "estacion" },
  { tagName: "Sentido", data: folios, modelName: "sentido" },
  { tagName: "Económico", data: folios, modelName: "economico" },
  { tagName: "Empresa", data: folios, modelName: "empresa" },
  { tagName: "Motivo", data: folios, modelName: "motivo" },
];

export default function Desincorporacion() {
  const classes = useStyles();
  //Model
  const _desinc = structDataDesinc;

  //Import the hooks
  const [
    formValues,
    handleInputChange,
    handleFechaChange,
    handleHoraChange,
    handleJornadaChange,
  ] = useForm(_desinc);

  // Default values from data Time
  const { fecha, hora, jornada } = formValues;

  console.log(formValues);

  return (
    <Grid container spacing={3}>
      <Grid item lg={12}>
        <Paper className={classes.paper} variant="outlined">
          <Typography variant="h6" component="h4">
            Desincorporación / Entrada
          </Typography>
        </Paper>
      </Grid>
      <Grid item lg={12}>
        {/* SELECTS INPUTS */}
        {selectInputsTag.map((tag) => (
          <FormControl key={tag.tagName} className={classes.formControl}>
            <InputLabel>{tag.tagName}</InputLabel>
            <Select
              id="demo-mutiple-name"
              defaultValue=""
              input={<Input />}
              onChange={handleInputChange}
              MenuProps={MenuProps}
              name={tag.modelName}
            >
              {tag.data.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </Grid>
      {/* ODÓMETRO */}
      <Grid item lg={4}>
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-required"
            label="Odómetro"
            name="odometro"
            onChange={handleInputChange}
          />
        </FormControl>
      </Grid>
      {/* CREDENCIAL */}
      <Grid item lg={4}>
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-required"
            label="Credencial"
            name="credencial"
            onChange={handleInputChange}
          />
        </FormControl>
      </Grid>
      {/* NOMBRE */}
      <Grid item lg={4}>
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-required"
            label="Nombre"
            name="nombre"
            onChange={handleInputChange}
          />
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        {/* FECHA */}
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Fecha"
              format="MM/dd/yyyy"
              value={fecha}
              onChange={handleFechaChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        {/* HORA */}
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Hora"
              value={hora}
              onChange={handleHoraChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        {/* JORNADA */}
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Jornada"
              value={jornada}
              onChange={handleJornadaChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>
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
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </Grid>
      <Grid item lg={2}>
        {/* TIPO DESINCO */}
        <FormControl className={classes.formControl}>
          <FormLabel>Tipo</FormLabel>
          <RadioGroup
            aria-label="gender"
            onChange={handleInputChange}
            name="tipo"
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
              label="Afectación"
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
            // value={value2}
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
      <Grid item lg={12}>
        <Paper className={classes.paper} elevation={3} variant="outlined">
          <Typography variant="h6" component="h4">
            Referencia
          </Typography>
        </Paper>
      </Grid>
      <Grid item lg={12}>
        {/* <Referencia /> */}
        hi
      </Grid>
    </Grid>
  );
}

/*
    <Grid item lg={4}>
        
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-required"
            label="Odómetro"
            name="odometro"
            onChange={handleInputChange}
          />
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-required"
            label="Credencial"
            name="credencial"
            onChange={handleInputChange}
          />
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        // NOMBRE 
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-required"
            label="Nombre"
            name="nombre"
            onChange={handleInputChange}
          />
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        // FECHA 
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Fecha"
              format="MM/dd/yyyy"              
              value={fecha}
              onChange={handleFechaChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        // HORA 
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Hora"              
              value={hora}
              onChange={handleHoraChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        // JORNADA
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              margin="normal"              
              id="time-picker"
              label="Jornada"
              value={jornada}
              onChange={handleJornadaChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </Grid>
      <Grid item lg={8}>
        //OBSERVACIONES 
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
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </Grid>
      <Grid item lg={2}>
        //TIPO DESINCO
        <FormControl className={classes.formControl}>
          <FormLabel>Tipo</FormLabel>
          <RadioGroup
            aria-label="gender"
            onChange={handleInputChange}
            name="tipo"
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
              label="Afectación"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item lg={2}>
        // ESTADO FOLIO
        <FormControl className={classes.formControl}>
          <FormLabel>Estado de foilo</FormLabel>
          <RadioGroup
            aria-label="gender"
            // value={value2}
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
      <Grid item lg={12}>
        <Paper className={classes.paper} elevation={3} variant="outlined">
          <Typography variant="h6" component="h4">
            Referencia
          </Typography>
        </Paper>
      </Grid>
      <Grid item lg={12}>
        <Referencia />
      </Grid>

*/
