import {z} from 'zod'


export const messagesSchema = z.object({
   content: z
    .string().
    .min(10,{message: 'content must be at least 10 charaters'})
    .max(300,{message: 'content must be at less than 300 charaters'})

})