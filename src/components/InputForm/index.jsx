import {makeStyles} from '@material-ui/styles'
import {Box, TextField} from'@mui/material'

const useStyles = makeStyles(() => ({
  root: {
    width: '120px',
    margin: '10px'
  }
}))

function InputForm(props) {
  const classes = useStyles()

  return (
    <Box
    className={classes.root}
    component="form"
    noValidate
    autoComplete="off"
    >
      <TextField
          id="outlined-multiline-flexible"
          variant="outlined"
          label="Scale"
          value={props.scale}
          onChange={props.handleChange}
        />
    </Box>
  );
}

export default InputForm;