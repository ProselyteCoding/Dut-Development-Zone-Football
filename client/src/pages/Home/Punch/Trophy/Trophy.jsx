import React from 'react'
import './Trophy.scss'
import {Canvas} from '@react-three/fiber'
import {OrbitControls,Stage} from '@react-three/drei'
import WorldCup from './World_cup_trophy'


const ThreeDCanvas = () => {
  return (
    <div className='canvas-container'>
      <Canvas>
        <Stage environment={'city'} intensity={0.8}>
          <WorldCup/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={3.8} />
      </Canvas>
    </div>
  )
}

export default ThreeDCanvas
