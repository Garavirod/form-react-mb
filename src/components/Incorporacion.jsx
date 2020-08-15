import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
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

// Lineas
const lineas = [
    "Linea 1",
    "Linea 2",
    "Linea 3",
    "Linea 4",
    "Linea 5",
    "Linea 6",
    "Linea 7",
  ];

// Recorrido
const spinerInputs = [
  { tagname: "Idas", nameFunction: "getIdas" },
  { tagname: "Vueltas", nameFunction: "getVueltas" },
  { tagname: "Regresos", nameFunction: "getRegresos" },
];

// Tramos
const tramosSelect = [
  { tagName: "Desde", data: lineas },
  { tagName: "Hasta", data: lineas },
];

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



const selectInputsTag = [
  { tagName: "Informa", data: folios },
  { tagName: "Estación", data: lineas },
  { tagName: "Sentido", data: folios },
  { tagName: "Empresa", data: folios },
  { tagName: "Económico", data: folios },
  { tagName: "Status", data: folios },
  { tagName: "Entrada", data: folios },
];

export default function Desincorporacion() {
  const classes = useStyles();
  const handleChange = (event) => {
    event.preventDefault();
    setPersonName(event.target.value);
  };

  const [selectedDate, handleDateChange] = useState(new Date());
  const [personName, setPersonName] = React.useState([]);
  const [value, setValue] = React.useState(30);
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item lg={12}>
        <Paper className={classes.paper} variant="outlined">
          <Typography variant="h6" component="h4">
            Incorporación / Salida
          </Typography>
        </Paper>
      </Grid>
      <Grid item lg={12}>
        {/* SELECTS INPUTS */}
        {selectInputsTag.map((tag) => (
          <FormControl key={tag.tagName} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">{tag.tagName}</InputLabel>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<Input />}
              MenuProps={MenuProps}
            >
              {tag.data.map((d) => (
                <MenuItem key={d} value={d}>
                  {d}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </Grid>
      <Grid item lg={4}>
        {/* ODÓMETRO */}
        <FormControl className={classes.formControl}>
          <TextField id="standard-required" label="Odómetro" />
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        {/* CREDENCIAL */}
        <FormControl className={classes.formControl}>
          <TextField id="standard-required" label="Credencial" />
        </FormControl>
      </Grid>
      <Grid item lg={4}>
        {/* NOMBRE */}
        <FormControl className={classes.formControl}>
          <TextField id="standard-required" label="Nombre" />
        </FormControl>
      </Grid>
      <Grid item lg={6}>
        {/* FECHA */}
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Fecha"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </Grid>
      <Grid item lg={6}>
        {/* HORA */}
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Hora"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </Grid>
      <Grid item lg={12}>
        <Paper className={classes.paper} elevation={3} variant="outlined">
          <Typography variant="h6" component="h4">
            Incumplido / Cubierto
          </Typography>
        </Paper>
      </Grid>
      <Grid item lg={12}>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <Grid container spacing={3}>
              <Grid item lg={12}>
                <Typography variant="h7" component="h6">
                  Recorridos
                </Typography>
              </Grid>
              {spinerInputs.map((tag) => (
                <Grid item lg={12}>
                  <FormControl>
                    <InputLabel id="demo-mutiple-name-label">
                      {tag.tagname}
                    </InputLabel>
                    <Input
                      className={classes.input}
                      value={value}
                      margin="dense"
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      inputProps={{
                        step: 10,
                        min: 0,
                        max: 100,
                        type: "number",
                        "aria-labelledby": "input-slider",
                      }}
                    />
                  </FormControl>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Grid container spacing={3}>
              <Grid item lg={12}>
                <Typography variant="h7" component="h6">
                  Tramos
                </Typography>
              </Grid>
              {tramosSelect.map((tag) => (
                <Grid item lg={12}>
                  <FormControl
                    key={tag.tagName}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-mutiple-name-label">
                      {tag.tagName}
                    </InputLabel>
                    <Select
                      labelId="demo-mutiple-name-label"
                      id="demo-mutiple-name"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<Input />}
                      MenuProps={MenuProps}
                    >
                      {tag.data.map((d) => (
                        <MenuItem key={d} value={d}>
                          {d}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
