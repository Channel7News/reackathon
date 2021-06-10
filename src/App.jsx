import React, { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import CountrySelector from './components/CountrySelector'
// import Filter from './components/Filter'
// import ArticlesList from './components/ArticlesList'
// import Article from './components/Article'
// import Footer from './components/Footer'

const App = () => {
  const [countryCode, setCountryCode] = useState('au')

  const handleCountryChange = (code) => {
    setCountryCode(code)
  }

  const apiData = () => {
    const apiKey = '324369bedbcf4ccbb3c61134b2d0da9d'
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => console.log('DATA:', data.articles))
  }

  return (
    <div>
      <Header />
      <Navbar handleCountryChange={handleCountryChange} />
      {/* {apiData()} */}
    </div>
  )
}

export default App
