import { ReactNode } from 'react'
import { HeaderContent, Scroll } from 'src/styles'
import { Container, Title } from 'src/styles/animals'
import { Footer } from '../footer'
import { Header } from '../header'
import { DefaultHead } from '../head'
import { Navigation, Path } from '../navigation'

interface TemplateProps {
  children: ReactNode
  paths?: Path[]
  showNavigation?: boolean
  title?: string
  showTitle?: boolean
  showFooter?: boolean
  showHead?: boolean
}

export const Template: React.FC<TemplateProps> = ({
  children,
  paths = [],
  showNavigation = true,
  title,
  showTitle = true,
  showFooter = true,
  showHead = true,
}) => {
  return (
    <>
      {showHead && <DefaultHead />}
      <Scroll>
        <HeaderContent margin>
          <Header />
        </HeaderContent>
        <Container>
          {showNavigation && <Navigation paths={paths} title={title} />}
          {showTitle && title && (
            <Title className="hideOnMobile">{title}</Title>
          )}
          {children}
        </Container>
        {showFooter && <Footer />}
      </Scroll>
    </>
  )
}
