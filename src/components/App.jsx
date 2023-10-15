import Header from "./Header"
import Footer from "./Footer"
import BannerContainer from "./BannerContainer"
import falaiseImg from "../assets/falaise.png"

function App() {
  return (
    <div>
      <Header />
      <BannerContainer
        img={falaiseImg}
        altText="Image d'une falaise avec la mer dechainée en contrebas"
        text="Chez vous, partout et ailleurs"
      ></BannerContainer>
      <Footer />
    </div>
  )
}

export default App
