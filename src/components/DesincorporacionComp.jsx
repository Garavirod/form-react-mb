import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  Paper,
  Typography,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { getFolios } from "../helpers/DataGetters";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  conatiner: {
    flexGrow: 1,
    margin: "20px",
    height: "100vh",
  },
}));

export const DesincorporacionComp = (props) => {
  const classes = useStyles();
  const { valuesDes, handleInputChangeDes } = props;

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
  } = valuesDes;

  const folios = getFolios();

  console.log(valuesDes);
  return (
    <div className={classes.root}>
      <Grid container spancing={3}>
        <Grid item lg={12}>
          <Paper className={classes.paper} variant="outlined">
            <Typography variant="h6" component="h4">
              Desincorporacion / Entrada
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <FormControl className={classes.formControl}>
            <InputLabel>Folio</InputLabel>
            <Select
              native
              value={folio}
              onChange={handleInputChangeDes}
              inputProps={{
                name: "folio",
              }}
            >
              {folios.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
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
              onChange={handleInputChangeDes}
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
              onChange={handleInputChangeDes}
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
              onChange={handleInputChangeDes}
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
              onChange={handleInputChangeDes}
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
              onChange={handleInputChangeDes}
              name="tipo"
              value={tipo}
            >
              <FormControlLabel
                value="Incumplido"
                control={<Radio />}
                label="Incumplido"
              />
              <FormControlLabel
                value="Apoyo"
                control={<Radio />}
                label="Apoyo"
              />
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
              onChange={handleInputChangeDes}
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
      </Grid>
    </div>
  );
};
