import React, { useState, useEffect } from 'react'
import ArticlesList from './components/ArticlesList'

import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Filter from './components/Filter'
// import Footer from './components/Footer'

// Importing the react-dates files
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const App = () => {
  const [articleData, setArticleData] = useState()
  const apiKey1 = '324369bedbcf4ccbb3c61134b2d0da9d'
  const apiKey2 = '4528ed13b69744e581384c6fa39e00de'

  const [countryCode, setCountryCode] = useState('au')
  const handleCountryChange = (code) => {
    setCountryCode(code)
  }

  const [searchValue, setSearchValue] = useState("a")
  const handleSearchValue = (inputValue) => {
    setSearchValue(inputValue)
  }

  useEffect(() => {
    // fetch(
    //   `https://newsapi.org/v2/top-headlines?q=${searchValue}&country=${countryCode}&apiKey=${apiKey2}`
    // )

    // // Top Headlines sample
    // fetch('./sample-topheadlines.json', {
    //   headers : { 
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //    }
    //   })

    // Everything sample
    fetch('./sample-everything.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      })
      .then((res) => res.json())
      .then((data) => setArticleData(data))
  }, [searchValue, countryCode])
  
  return (
    <div className="App">
      <Header />
      <Navbar handleCountryChange={handleCountryChange} />
      <Filter handleSearchValue={handleSearchValue}/>
      <ArticlesList articleData={articleData} />
    </div>
  )
}

export default App
