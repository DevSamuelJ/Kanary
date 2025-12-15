// import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
    <body className='bg-blue-400'>
      <div className='py-8 px-10'>
        <Header />
        <Main />
      </div>
      <Footer />
    </body>

    </>
  )
}

export default App
