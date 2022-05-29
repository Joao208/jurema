import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { Button } from 'src/components/button'
import { Template } from 'src/components/template'
import { getQR } from 'src/services/api'
import { Description, FlexWrapperSuccess } from 'src/styles/animal'
import { Title } from 'src/styles/animals'
import * as S from '../../styles/donate'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { CopyIcon } from 'public/copy'
import { CheckIcon } from 'public/checked'

const QR: React.FC = () => {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [originalCopyCode, setOriginalCopyCode] = useState('')
  const [copyCode, setCopyCode] = useState('Loading...')

  const router = useRouter()

  const { value, name } = router.query

  const resize = useCallback(() => {
    if (typeof screen != 'undefined') {
      setIsMobile(screen.width < 900)
    }
  }, [])

  useEffect(() => {
    resize()

    window.addEventListener('resize', resize)
  }, [resize])

  useEffect(() => {
    const fetchBackend = async () => {
      try {
        const { data: response } = await getQR({
          name,
          value: Number(value),
        })

        setImage(response.QRCode)
        setCopyCode(response.copyCode)
        setOriginalCopyCode(response.copyCode)
        setLoading(false)
      } catch {
        const message = 'Parece que algo deu errado, tente novamente mais tarde'

        return toast.error(message)
      }
    }

    fetchBackend()
  }, [value, name])

  const handleSubmit = useCallback(() => {
    setLoading(true)

    window.location.href = '/donate/success'
  }, [])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(copyCode)

    setCopyCode('Código copiado!')
    setTimeout(() => setCopyCode(originalCopyCode), 3000)
  }, [copyCode, originalCopyCode])

  return (
    <Template
      paths={[
        { path: '/donate', label: 'Doe' },
        { path: '/donate/qr', label: 'Aguardando doação' },
      ]}
      title="Aguardando"
      showFooter={false}
      showTitle={false}
    >
      <FlexWrapperSuccess>
        <div>
          <Title className="hideOnMobile">Aguardando doação</Title>

          <Description style={{ maxWidth: 603 }}>
            {isMobile
              ? 'Copie o código PIX abaixo e insira no seu aplicativo de pagamentos. Após concluir, clique em “Concluir doação”.'
              : 'Abra seu aplicativo de pagamentos e leia o código PIX ao lado para efetuar a doação. Ao completar, clique no botão abaixo.'}
          </Description>

          <S.CopyContainer onClick={handleCopy}>
            <p>{copyCode}</p>
            <div>
              {copyCode !== 'Código copiado!' ? <CopyIcon /> : <CheckIcon />}
            </div>
          </S.CopyContainer>

          <Button
            onClick={handleSubmit}
            mobileWidth="211px"
            isLoading={loading}
            width="280px"
            buttonText="Concluir doação"
          />
        </div>
        {loading && !isMobile && <S.Loading />}
        {!loading && image && !isMobile && (
          <Image
            priority
            quality="100"
            alt="QR Code"
            title="Escaneie-me"
            width="345px"
            height="345px"
            placeholder="blur"
            blurDataURL={image}
            src={image}
          />
        )}
      </FlexWrapperSuccess>
    </Template>
  )
}

export default QR
