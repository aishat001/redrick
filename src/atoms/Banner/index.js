import "./Banner.css";
const Banner = ({ imageSrc, title }) => {
  return (
    <div className="card banner" 
    style={{ width: "25rem" }}
    >
      <img src={imageSrc} class="card-img-top" alt="..." />
      {/* <div className="card-body"> */}
      <h2 className="card-title bannerTitle">{title}</h2>

      {/* </div> */}
    </div>
  );
};

export default Banner;
