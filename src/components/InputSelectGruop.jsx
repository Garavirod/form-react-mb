import React, { useState } from "react";
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

const lineas = [
  "Linea 1",
  "Linea 2",
  "Linea 3",
  "Linea 4",
  "Linea 5",
  "Linea 6",
  "Linea 7",
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function InputSelectGroup() {
  const classes = useStyles();

  const [folio, setFolio] = useState("");
  const [linea, setLinea] = useState("");
  const [solicita, setSolicita] = useState("");
  const [infroma, setInfroma] = useState("");
  const [estacion, setEstacion] = useState("");
  const [sentido, setSentido] = useState("");
  const [economico, setEconomico] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [motivo, setMotivo] = useState("");

  const handleInputchange = (e) =>{
      switch (e.target.name) {
          case "folio":
              setFolio(e.target.value);
              break;
          default:
              break;
      }
  }

  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel>Folio</InputLabel>
        <Select
          id="demo-mutiple-name"
          value={folio}
          input={<Input />}
          onChange={dataInputsChange}
          MenuProps={MenuProps}
          name={tag.modelName}
        >
          {folios.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
