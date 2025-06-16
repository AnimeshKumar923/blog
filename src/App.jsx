import "./App.css";
import Header from "./components/Header.jsx";
import BlogCard from "./components/BlogCard.jsx";
import HighlightBlog from "./components/HIghlightBlog.jsx";
import BlogPage from "./components/BlogPage.jsx";
function App() {
  const blogPath = `public/blogs/how-i-became-an-open-source-dweller.md`;
  return (
    <>
      <div className="mainContainer">
        <Header />
        <div className="content">
          {/* <HighlightBlog /> */}
          <BlogPage content={blogPath} />
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
