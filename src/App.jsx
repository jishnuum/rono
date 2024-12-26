import About from "./components/About"
import Career from "./components/Career"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {

  return (
    <>

    <div className="headerSection" id="headerSection">
      <Header />
    </div>

    <div className="homeSection" id="homeSection">
      <Home />
    </div>

    <div className="aboutSection py-4" id="aboutSection">
      <About />
    </div>

    <div className="careerSection container" id="careerSection">
      <Career />
    </div>

    <div className="gallerySection " id="gallerySection">
      <Gallery />
    </div>


    <div className="contactSection " id="contactSection">
      <Contact />
    </div>

    <div className="footerSection" id="footerSection">
      <Footer />
    </div>


    </>
  )
}

export default App
