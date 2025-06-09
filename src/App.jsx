import "./App.css";
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
          <div className="highlightBlog">
            <HighlightBlog />
          </div>
          <div className="remainingBlogs">
            <BlogCard name={"Coming Soon"} date={"Summer, 2025"}/>
          </div>
          <About/>
        </div>
      </div>
    </>
  );
}

export default App;
