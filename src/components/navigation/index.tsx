import Link from 'next/link'
import { ArrowLeftIcon } from 'public/navigationIcons/arrowLeft'
import { HomeIcon } from 'public/navigationIcons/home'
import React from 'react'
import * as S from './styles'

export interface Path {
  path: string
  label: string
}

interface NavigationProps {
  paths: Path[]
}

export const Navigation: React.FC<NavigationProps> = ({ paths }) => {
  return (
    <S.Container>
      <Link href="/" passHref>
        <div>
          <HomeIcon />
        </div>
      </Link>
      {paths.map(({ path, label }, index) => (
        <>
          <ArrowLeftIcon />
          {index === paths.length - 1 ? (
            <p>{label}</p>
          ) : (
            <Link href={path} passHref>
              <p className="redirect">{label}</p>
            </Link>
          )}
        </>
      ))}
    </S.Container>
  )
}
