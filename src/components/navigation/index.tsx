import Link from 'next/link'
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
      <Link href="/" passHref>
        <div>
          <HomeIcon />
        </div>
      </Link>
      {paths.map((path, index) => (
        <>
          <ArrowLeftIcon />
          {index === paths.length - 1 ? (
            <p>{path}</p>
          ) : (
            <Link href="/" passHref>
              <p className="redirect">{path}</p>
            </Link>
          )}
        </>
      ))}
    </S.Container>
  )
}
