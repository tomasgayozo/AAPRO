import "./newsCard.css";

export const Newscard = ({ title, description, source, image }) => {
  const imageUrl = image ? image : "https://via.placeholder.co/200*400";

  return (
    <div className="news-card">
      <img src={imageUrl} alt={title} />
      <div className="news-card-content"></div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Fuente: {source}</p>
    </div>
  );
};
