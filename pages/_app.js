import '@/styles/globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ 
  weight: ['100', '300', '400','700','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'], 
})

export default function App({ Component, pageProps }) {
  return (
  <>
   <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
  <Component {...pageProps} />
  </>
  )
}
