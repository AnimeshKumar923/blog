import "./App.css";
import Header from "./components/Header.jsx";
import BlogCard from "./components/BlogCard.jsx";
import HighlightBlog from "./components/HIghlightBlog.jsx";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <hr className="mainPagehr" />
        <div className="content">
          <HighlightBlog
            image={{
              src: "https://fastly.picsum.photos/id/201/500/300.jpg?hmac=v0GEqa-YATYYy9hkxWbMmoxVAp_JtNKUSpkfKBtwuBE",
              alt: "highlight blog image",
            }}
            blog={{
              timeline: "Summer, 2025",
              heading: "Becoming an open source dweller",
              description: "Well, kind of.",
            }}
          />
          <div className="remainingBlogs">
            <Link to={`/blogs/sample`}>
              <BlogCard name={"Coming Soon"} date={"Summer, 2025"} />
            </Link>
            <Link to={`/blogs/sample`}>
              <BlogCard name={"Coming Soon"} date={"Summer, 2025"} />
            </Link>
            <Link to={`/blogs/sample`}>
              <BlogCard name={"Coming Soon"} date={"Summer, 2025"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
