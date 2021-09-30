import React, {useRef} from 'react';
import {Button} from'@mui/material'
import {makeStyles} from '@material-ui/styles'
import InputFormForm from './components/InputForm';
import SelectListOfGeometry from './components/SelectListOfGeometry';
import GeometryModel from './components/GeometryModel';
import { OrbitControls } from '@react-three/drei'
import { Canvas } from 'react-three-fiber'
import * as THREE from 'three'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles(() => ({
  userData: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%'
  },
  button: {
    height: '55px',
    '&.css-1e6y48t-MuiButtonBase-root-MuiButton-root': {
      backgroundColor: 'black',
      margin: '10px',
    }
  },
  listOfUUIDs: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
  },
  itemInListOfUUIDs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: '1px solid',
    borderRadius: '3px',
    margin: '1px',
    justifyContent: 'space-between'
  }
}))


function App() {
  const classes = useStyles()
  const [geometry, setGeometry] = React.useState('');
  const [scale, setScale] = React.useState('');
  const [listOfModels, setListOfModels] = React.useState([]);
  const Mesh = new THREE.Mesh()
  const mesh = useRef(Mesh)
  const uuid = Mesh.uuid

  const handleChangeSelectList = (event) => {
    setGeometry(event.target.value);
  };

  const handleChangeInputForm = (event) => {
    setScale(event.target.value);
  };

  const createNewModel = () => {
    const item = (geometry && scale && {'component':<GeometryModel geometryType={geometry} scale={scale} mesh={mesh}/>, 'uuid': uuid})
    item && setListOfModels([...listOfModels, item])
  }

  return (
    <div className={classes.app}>
      <div className={classes.userData}>
      <SelectListOfGeometry geometry={geometry} handleChange={handleChangeSelectList}/>
      <InputFormForm scale={scale} handleChange={handleChangeInputForm}/>
      <Button className={classes.button} onClick={createNewModel}>
        Create
      </Button>
      </div>
      <Canvas style={{height: '900px', backgroundColor: '#eeeeee'}}>
      <ambientLight intensity={0.5} />
          <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.7}
        />
            <pointLight position={[-10, 0, -20]} intensity={0.2}/>
            <pointLight position={[0, -10, 0]} intensity={0.2}/>
        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -15, -5]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]}/>
            <meshStandardMaterial attach='material' color={'#6a869f'} />
          </mesh>
        </group>
        {listOfModels.map((item) => {
          return item.component
        })}
        <OrbitControls position='40'/>
      </Canvas>
      <div className={classes.listOfUUIDs}>
      {listOfModels.map((item, index) => {
          return <div className={classes.itemInListOfUUIDs}>
            {item.uuid}
            <IconButton onClick={function() {
              if (index !== -1) {
                setListOfModels(listOfModels.filter((model, id) => id !== index))
              }
            }}>
              <CloseIcon />
              </IconButton>
            </div>
        })}
      </div>
    </div>
  );
}

export default App;
