import { useEffect, useState } from "react";
import axios from 'axios'
import NewsItem from "./NewsItem";

const NewsList = ({category}) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    axios.get(url)
      .then(response=> { 
        setArticles(response.data.articles)
        // console.log(response.data.articles) 
      },[category]);
  }, )
  return <>
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
    </div>
    <div className="karad">
      {articles.map(item => <NewsItem key={item.title} title={item.title} src={item.urlToImage} description={item.description} link={item.url} />)}
    </div>
  </>
}

export default NewsList;
