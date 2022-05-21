import { ArrowLeftIcon } from 'public/navigationIcons/arrowLeft'
import { HomeIcon } from 'public/navigationIcons/home'
import React from 'react'
import * as S from './styles'

interface NavigationProps {
  paths: string[]
}

export const Navigation: React.FC<NavigationProps> = ({ paths }) => {
  return (
    <S.Container>
      <HomeIcon />
      {paths.map((path) => (
        <>
          <ArrowLeftIcon />
          <p>{path}</p>
        </>
      ))}
    </S.Container>
  )
}
