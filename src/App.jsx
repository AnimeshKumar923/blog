import "./App.css";
import { Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import BlogCard from "./components/BlogCard.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import HighlightBlog from "./components/HIghlightBlog.jsx";
function App() {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <div className="content">
            <HighlightBlog />
          <div className="remainingBlogs">
            <BlogCard name={"Coming Soon"} date={"Summer, 2025"}/>
            <BlogCard name={"Coming Soon"} date={"Summer, 2025"}/>
            <BlogCard name={"Coming Soon"} date={"Summer, 2025"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
