import React from 'react'

import './App.css'
// import Header from './components/Header'
// import Navbar from './components/Navbar'
import Filter from './components/Filter'
// import ArticlesList from './components/ArticlesList'
// import Article from './components/Article'
// import Footer from './components/Footer'

const App = () => {
  const apiData = () => {
    const apiKey = '324369bedbcf4ccbb3c61134b2d0da9d'
    fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2021-06-08&to=2021-06-08&sortBy=popularity&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
      {apiData()}
      <Filter/>
    </div>
  )
}

export default App
