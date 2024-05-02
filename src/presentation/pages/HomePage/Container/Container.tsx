import React from 'react'
import { AdaptiveContainer } from './Container.styled'
import { ContainerProps } from '../types'

const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <AdaptiveContainer>{children}</AdaptiveContainer>
  )
}

export default Container