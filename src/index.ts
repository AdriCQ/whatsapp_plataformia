import "dotenv/config"
import BotWhatsapp from '@bot-whatsapp/bot'
import database from './database';
import provider from './provider';
import flow from './flow';

/**
 * Funcion principal del bot
 */
const main = async () => {
    const botFLow = BotWhatsapp.addKeyword('hola').addAnswer('Buenas!') as any


    await BotWhatsapp.createBot({
        database,
        provider,
        flow
    })

}


main()