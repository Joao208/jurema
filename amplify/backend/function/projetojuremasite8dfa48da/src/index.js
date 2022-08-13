const { QrCodePix } = require('qrcode-pix')

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(JSON.stringify(event))

  try {
    const qrCodePix = QrCodePix({
      version: '01',
      /** @type {*} */
      key: process.env.PIX_KEY,
      /** @type {*} */
      name: event.queryStringParameters?.name,
      city: 'SAO PAULO',
      message: 'Contribuição para o Projeto Jurema',
      cep: '13860606',
      /** @type {*} */
      value: Number(event.queryStringParameters?.value),
    })

    const body = JSON.stringify({
      QRCode: await qrCodePix.base64(),
      copyCode: qrCodePix.payload(),
    })

    console.log(body)

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      },
      body,
    }
  } catch (error) {
    console.error(error)

    return {
      statusCode: 500,
      body: 'Internal Server Error',
    }
  }
}
