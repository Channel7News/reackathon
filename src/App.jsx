import React, { useState, useEffect } from "react";
import ArticlesList from "./components/ArticlesList";
import "./App.css";
// import Header from './components/Header'
// import Navbar from './components/Navbar'
// import Filter from './components/Filter'
// import Footer from './components/Footer'

const App = () => {
  const [articleData, setArticleData] = useState();
  const apiKey = "324369bedbcf4ccbb3c61134b2d0da9d";

  const ApiData = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2021-06-08&to=2021-06-08&sortBy=popularity&apiKey=${apiKey}`
    ).then((res) => res.json());
  };

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2021-06-08&to=2021-06-08&sortBy=popularity&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setArticleData(data));
    // ApiData().then((data) => setArticleData(data));
  }, []);

  return <ArticlesList articleData={articleData} />;
};

export default App;
