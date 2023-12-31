import Image from 'next/image'
import Header from './components/header/Header'
import PropertyPage from './components/properties_list/PropertyPage'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Header />
      <PropertyPage />
      <Footer />
    </main>
  )
}
