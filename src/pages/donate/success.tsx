import { DogIcon } from 'public/dog'
import { Button } from 'src/components/button'
import { Template } from 'src/components/template'
import { Description, FlexWrapperSuccess } from 'src/styles/animal'
import { Title } from 'src/styles/animals'

interface SuccessProps {}

const Success: React.FC<SuccessProps> = () => {
  return (
    <Template
      paths={[
        { path: '/donate', label: 'Doe' },
        { path: '/donate/success', label: 'Doação completa' },
      ]}
    >
      <FlexWrapperSuccess>
        <div>
          <Title>Doação completa!</Title>

          <Description style={{ maxWidth: 603 }}>
            Obrigado por ter contribuindo para o Projeto Jurema e para um mundo
            cada vez melhor.
          </Description>

          <Button
            href="/"
            mobileWidth="211px"
            width="280px"
            buttonText="Voltar ao início"
          />
        </div>

        <DogIcon />
      </FlexWrapperSuccess>
    </Template>
  )
}

export default Success
