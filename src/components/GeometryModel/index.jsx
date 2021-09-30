import React from 'react';

const geometryObject = {
    'Cube': (scale, mesh, getRandomInt) => {
        const setScale = 1*scale
        return <mesh ref={mesh} position={[getRandomInt(-15, 15), getRandomInt(-12, -2), getRandomInt(-20, -5)]}>
        <boxBufferGeometry attach='geometry' args={[setScale, setScale, setScale]} />
        <meshStandardMaterial attach='material' color={'#e54f6e'} />
    </mesh>
    },
    'Sphere': (scale, mesh, getRandomInt) => {
        return <mesh ref={mesh} position={[getRandomInt(-15, 15), getRandomInt(-12, -2), getRandomInt(-20, -5)]}>
        <sphereGeometry attach='geometry' args={[scale, 64, 64, 0, 6.3, 0, 6.3]}/>
        <meshStandardMaterial attach='material' color={'#009894'} />
    </mesh>
    },
    'Pyramid': (scale, mesh, getRandomInt) => {
        const setScale = 1*scale
        return <mesh ref={mesh} position={[getRandomInt(-15, 15), getRandomInt(-12, -2), getRandomInt(-20, -5)]}>
        <coneBufferGeometry attach='geometry' args={[setScale, setScale, 4]} />
        <meshStandardMaterial attach='material' color={'#d9ad26'} />
    </mesh>
    },
}

function GeometryModel(props) {

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min
      }

  return (
        <>
        {geometryObject[props.geometryType](props.scale, props.mesh, getRandomInt)}
        </>
  );
}

export default GeometryModel;