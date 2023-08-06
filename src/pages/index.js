import Image from 'next/image'
import { Inter } from 'next/font/google'
import Chat from '../../components/chat'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Chat />
    </>
  )
}
