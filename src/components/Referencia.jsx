import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

const rutas = [
  "Linea 1",
  "Linea 2",
  "Linea 3",
  "Linea 4",
  "Linea 5",
  "Linea 6",
  "Linea 7",
];

const selectInputs = [
  { tagname: "Ida", data: rutas },
  { tagname: "Regreso", data: rutas },
];

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    padding:10
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
  viewRoot: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },

  divTree: {
    //   background:'lime',
    maxHeight: 200,
  },

  formControl: {
    margin: theme.spacing(3),
    minWidth: 220,
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

export default function Referencia() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item lg={12}>
        <Card className={classes.root}>
          <Typography variant="h6" component="h4">
            Referencia
          </Typography>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item lg={6}>
                <div className={classes.divTree} style={{ overflow: "scroll" }}>
                  <TreeView
                    className={classes.viewRoot}
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    <TreeItem nodeId="1" label="Applications">
                      <TreeItem nodeId="2" label="Calendar" />
                      <TreeItem nodeId="3" label="Chrome" />
                      <TreeItem nodeId="4" label="Webstorm" />
                      <TreeItem nodeId="2" label="Calendar" />
                      <TreeItem nodeId="3" label="Chrome" />
                      <TreeItem nodeId="4" label="Webstorm" />
                      <TreeItem nodeId="2" label="Calendar" />
                      <TreeItem nodeId="3" label="Chrome" />
                      <TreeItem nodeId="4" label="Webstorm" />
                      <TreeItem nodeId="2" label="Calendar" />
                      <TreeItem nodeId="3" label="Chrome" />
                      <TreeItem nodeId="4" label="Webstorm" />
                      <TreeItem nodeId="2" label="Calendar" />
                      <TreeItem nodeId="3" label="Chrome" />
                      <TreeItem nodeId="4" label="Webstorm" />
                    </TreeItem>
                    <TreeItem nodeId="5" label="Documents">
                      <TreeItem nodeId="10" label="OSS" />
                      <TreeItem nodeId="6" label="Material-UI">
                        <TreeItem nodeId="7" label="src">
                          <TreeItem nodeId="8" label="index.js" />
                          <TreeItem nodeId="9" label="tree-view.js" />
                        </TreeItem>
                      </TreeItem>
                    </TreeItem>
                  </TreeView>
                </div>
              </Grid>
              {selectInputs.map((tag) => (
                <Grid item lg={3}>
                  <FormControl
                    key={tag.tagname}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-mutiple-name-label">
                      {tag.tagname}
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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
