import React from 'react'
import { Balls, Screen } from './loader.style'

const LoadingScreen = () => {
  return (
      <Screen>
        <Balls>
          <div className="ball one">CAR</div>
          <div className="ball two">GAN</div>
          <div className="ball three">DO</div>
        </Balls>
      </Screen>
  )
}

export default LoadingScreen
