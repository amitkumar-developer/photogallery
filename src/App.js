import React, { useState, useEffect } from 'react';
import { fetchArticles } from './api';
import './App.css';

// ... (Previous code)

function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchArticles(page)
      .then((data) => {
        const articlesWithLikes = data.map((article) => ({
          ...article,
          likes: 0,
        }));
        setArticles((prevArticles) => [...prevArticles, ...articlesWithLikes]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [page]);

  const handleLike = (index) => {
    const updatedArticles = [...articles];
    updatedArticles[index].likes += 1;
    setArticles(updatedArticles);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Infinite Scroll App</h1>
      </header>
      <div className="article-list">
        {articles.map((article, index) => (
          <div className="article" key={article.id}>
            <img src={article.download_url} alt={article.author} />
            <div className="author">Author:{article.author}</div>
          
            <div className="like-container">
              <button className="like-button" onClick={() => handleLike(index)}>
                👍
              </button>
              <span className="like-count">{article.likes}</span>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

// ... (Rest of the code)


export default App;

