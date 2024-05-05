import { Roboto } from 'next/font/google'

export const roboto = Roboto({
    weight: ['400', '500', '700'], // 700 <- 600
    style: ['normal', 'italic'],
    subsets: ['latin']
})
