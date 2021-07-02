import React, { useState, useEffect, useRef } from 'react'
import ArticlesList from './components/ArticlesList'

import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
// import Footer from './components/Footer'

// Importing the react-dates files
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const App = () => {
  const [articleData, setArticleData] = useState()

  const [countryCode, setCountryCode] = useState('au')
  const handleCountryChange = (code) => {
    setCountryCode(code)
  }

  const [category, setCategory] = useState('business')
  const handleCategoryChange = (cat) => {
    setCategory(cat)
  }

  const [searchValue, setSearchValue] = useState('a')
  const handleSearchValue = (inputValue) => {
    setSearchValue(inputValue)
  }

  const usePrevious = (value) => {
    const ref = useRef()
    useEffect(() => {
      ref.current = value;
    })
    return ref.current;
  }
  const prevParams = usePrevious({searchValue, countryCode, category}) || {};
  
  useEffect(() => {
    if (prevParams.countryCode !== countryCode || prevParams.category !== category || prevParams.searchValue !== searchValue) {
      fetch(`https://gnews.io/api/v4/top-headlines?topic=${category}&country=${countryCode}&q=${searchValue}&token=fca634dda05de54dc1035a652740d3a4`)
        .then((res) => res.json())
        .then((data) => setArticleData(data))
    }
    if (searchValue === "") {
    fetch(
      `https://gnews.io/api/v4/top-headlines?topic=${category}&country=${countryCode}&token=fca634dda05de54dc1035a652740d3a4`
    )
      .then((res) => res.json())
      .then((data) => setArticleData(data))
    } 

    // WHEN TESTING, use the sample.json files

    // Top Headlines sample
    // fetch('./sample-topheadlines.json', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    // })
    
    // // Everything sample
    // fetch('./sample-everything.json', {
    //   headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //     },
    // })
    //   .then((res) => res.json())
    //   .then((data) => setArticleData(data))
  }, [prevParams.countryCode, prevParams.category, prevParams.searchValue, searchValue, category, countryCode])

  return (
    <div className="App">
      <Header />
      <Navbar
        handleCategoryChange={handleCategoryChange}
        handleCountryChange={handleCountryChange}
      />
      <Filter handleSearchValue={handleSearchValue} />
      <ArticlesList articleData={articleData} />
    </div>
  )
}

export default App
