import headshot from "../assets/headshot.jpg";

export default function About() {
  return (
    <div className="aboutSection">
      <img className="headshotImage" src={headshot} alt="headshot image of mine" />
      <div className="description">
        <p>Open Source dweller</p>
      </div>
    </div>
  );
}
