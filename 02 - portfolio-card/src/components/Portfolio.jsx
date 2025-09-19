import PortfolioPic from "../assets/image.jpg";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="empty">
        <img src={PortfolioPic} alt="Sangar" className="logo" />
      </div>
      <h3>Mr. saga</h3>
      <div className="container">
        i am a Web Developer, I will create interactive websites
      </div>
      <div className="contact">
        <button type="button">Contact Me</button>
      </div>
    </div>
  );
}
export default Portfolio;
