import Rect from "react";

const Card = ({gambar, title, content}) => {
  return (
    <div>
      <div className="card">
        <img src={gambar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {content}
          </p>
          <a href="#" className="btn btn-primary">
            Read Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
