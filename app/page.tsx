import Image from 'next/image'
import Header from './components/header/Header'
import PropertyPage from './components/properties_list/PropertyPage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-3 sm:p-5">
      <Header />
      <PropertyPage />
    </main>
  )
}
