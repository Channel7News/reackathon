import React, { useState, useEffect } from 'react'
import ArticlesList from './components/ArticlesList'

import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import CountrySelector from './components/CountrySelector'
// import Filter from './components/Filter'
// import Footer from './components/Footer'

const App = () => {
  const [articleData, setArticleData] = useState()
  const apiKey = '324369bedbcf4ccbb3c61134b2d0da9d'

  const [countryCode, setCountryCode] = useState('au')

  const handleCountryChange = (code) => {
    setCountryCode(code)
  }

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setArticleData(data))
  })

  return (
    <div className="App">
      <Header />
      <Navbar handleCountryChange={handleCountryChange} />
      <ArticlesList articleData={articleData} />
    </div>
  )
}

export default App
