import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources";
import { generatePrompt, generatePromptDetermine } from "./prompt";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://apigateway.avangenio.net",
});

/**
 * 
 * @param name 
 * @param history 
 */
const run = async (name: string, history: ChatCompletionMessageParam[]): Promise<string> => {

    const promtp = generatePrompt(name)
    const response = await openai.chat.completions.create({
        model: "spark",
        messages: [
            {
                "role": "system",
                "content": promtp
            },
            ...history
        ],
        temperature: 1,
        max_tokens: 800,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response.choices[0].message.content
}

const runDetermine = async (history: ChatCompletionMessageParam[]): Promise<string> => {

    const promtp = generatePromptDetermine()
    const response = await openai.chat.completions.create({
        model: "spark",
        messages: [
            {
                "role": "system",
                "content": promtp
            },
            ...history
        ],
        temperature: 1,
        max_tokens: 800,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response.choices[0].message.content
}

export { run, runDetermine }


