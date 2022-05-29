import Link from 'next/link'
import { ArrowLeftIcon as MobileArrow } from 'public/arrowLeft'
import { ArrowLeftIcon as DesktopArrow } from 'public/navigationIcons/arrowLeft'
import { HomeIcon } from 'public/navigationIcons/home'
import React from 'react'
import { Title } from 'src/styles/animals'
import * as S from './styles'

export interface Path {
  path: string
  label: string
}

interface NavigationProps {
  paths: Path[]
  title?: string
}

const MobileNavigation: React.FC<NavigationProps> = ({ title }) => {
  let href = ''

  if (typeof window !== 'undefined') {
    href = window.location.href.includes('/animals') ? '/' : '/animals'
  }

  return (
    <S.ContainerMobile className="mobile">
      <Link href={href} passHref>
        <div>
          <MobileArrow />
        </div>
      </Link>
      <Title>{title}</Title>
    </S.ContainerMobile>
  )
}

const DesktopNavigation: React.FC<NavigationProps> = ({ paths }) => {
  return (
    <S.ContainerDesktop className="desktop">
      <Link href="/" passHref>
        <div>
          <HomeIcon />
        </div>
      </Link>
      {paths.map(({ path, label }, index) => (
        <>
          <DesktopArrow />
          {index === paths.length - 1 ? (
            <p className="label">{label}</p>
          ) : (
            <Link href={path} passHref>
              <p className="redirect">{label}</p>
            </Link>
          )}
        </>
      ))}
    </S.ContainerDesktop>
  )
}

export const Navigation: React.FC<NavigationProps> = ({ paths, title }) => {
  return (
    <S.Container>
      <MobileNavigation paths={paths} title={title} />
      <DesktopNavigation paths={paths} />
    </S.Container>
  )
}
