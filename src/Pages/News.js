import React, { useEffect, useState } from 'react';
import Article from './Article';
const apiKey = '4ad57f564dd846e6b0079e15f2020674'
const News = () => {
     const [articles, setArticles] = useState([])

     useEffect(()=>{
          fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`)
          .then(res=>res.json())
          .then(data=>{
               console.log(data.sources)
               setArticles(data.sources)
          })
     },[])

     return (
          <div>
               {
                    articles.map(article => <Article article={article}></Article>)  
               }
          </div>
     );
};

export default News;