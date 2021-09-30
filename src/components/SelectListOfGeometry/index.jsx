import {makeStyles} from '@material-ui/styles'
import {Box, FormControl, InputLabel, Select, MenuItem} from'@mui/material'

const useStyles = makeStyles(() => ({
    root: {
        width: '120px',
        margin: '10px'
    }
}))

const geometryModel = ['Cube', 'Sphere', 'Pyramid']

function SelectListOfGeometry(props) {
  const classes = useStyles()


  return (
    <Box className={classes.root}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Geometry</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={props.geometry}
          label="Geometry"
          onChange={props.handleChange}
        >
            {geometryModel.map((item, index) => {return <MenuItem value={item} key={index}>{item}</MenuItem>})}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectListOfGeometry;