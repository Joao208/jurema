const TelegramBot = require('node-telegram-bot-api')

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  try {
    console.log(JSON.stringify(event))

    process.env.NTBA_FIX_319 = '1'

    const today = new Date().toISOString()

    const { name, animalLink, phone } = event.queryStringParameters || {}

    const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {})

    const receivers = process.env.RECEIVERS?.split(/,| /) || []

    const newResponseForms = ({ name, today, phone, animalLink }) =>
      `${name}\n\nInformações do futuro dono\nData do requerimento: ${today}\nTelefone: ${phone}\n\nLink do animal: ${animalLink}`

    const text = newResponseForms({
      name,
      animalLink,
      phone,
      today,
    })

    console.log(JSON.stringify({ receivers, text }))

    await Promise.all(
      receivers.map((telegramId) => bot.sendMessage(telegramId, text))
    )

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      },
      body: JSON.stringify('Successfully sended'),
    }
  } catch (error) {
    console.error(error)

    return {
      statusCode: 500,
      body: JSON.stringify('Internal Server Error'),
    }
  }
}
