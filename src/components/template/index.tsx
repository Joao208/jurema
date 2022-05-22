import { HeaderContent, Scroll } from 'src/styles'
import { Container, Title } from 'src/styles/animals'
import { Footer } from '../footer'
import { Header } from '../header'
import { Navigation } from '../navigation'

interface TemplateProps {
  children: any
  paths?: string[]
  showNavigation?: boolean
  title?: string
}

export const Template: React.FC<TemplateProps> = ({
  children,
  paths = [],
  showNavigation = true,
  title,
}) => {
  return (
    <Scroll>
      <HeaderContent margin>
        <Header />
      </HeaderContent>
      <Container>
        {showNavigation && <Navigation paths={paths} />}
        {title && <Title>{title}</Title>}
        {children}
      </Container>
      <Footer />
    </Scroll>
  )
}
