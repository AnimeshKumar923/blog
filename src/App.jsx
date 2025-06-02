import "./App.css";
import NavBar from "./components/NavBar.jsx";
import BlogCard from "./components/BlogCard.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Home>
          <div className="textGroup">
            <div className="title">
              <h1>Personal Blog</h1>
              <h3>Welcome to my blog!</h3>
            </div>
            <BlogCard name="demo first" />
            <BlogCard name="demo second" />
          </div>
          <About />
        </Home>
      </div>
    </>
  );
}

export default App;
