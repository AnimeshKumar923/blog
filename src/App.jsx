import "./App.css";
import Header from "./components/Header.jsx";
import BlogCard from "./components/BlogCard.jsx";
import HighlightBlog from "./components/HIghlightBlog.jsx";
import BlogPage from "./components/BlogPage.jsx";
function App() {
  const blogPath = `/blogs/dweller.md`;
  return (
    <>
      <div className="mainContainer">
        <Header />
        <div className="content">
          {/* <HighlightBlog /> */}
          <BlogPage blogPath={blogPath} />
          {/* <div className="remainingBlogs">
            <BlogCard name={"Coming Soon"} date={"Summer, 2025"} />
            <BlogCard name={"Coming Soon"} date={"Summer, 2025"} />
            <BlogCard name={"Coming Soon"} date={"Summer, 2025"} />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
