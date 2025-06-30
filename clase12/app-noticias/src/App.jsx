import "./App.css";
import { Newscard } from "./components/newCard";
import NewsData from "./data/newsData";

function App() {
  return (
    <div className="app">
      <>
        <h1>App de noticias</h1>
        <div className="new-container">
          <h2>Noticias del dia</h2>
          {NewsData.map((news, indice) => (
            <NewsCard
              key={indice + news.title}
              title={news.title}
              description={news.description}
              source={news.source}
              image={news.image}
            />
          ))}
        </div>
      </>
    </div>
  );
}

export default App;
