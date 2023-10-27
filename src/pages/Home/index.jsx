import BannerContainer from "../../components/BannerContainer"
import cliff from "../../assets/cliff.png"
import DisplayHousings from "../../components/DisplayHousings";

function Home() {
  return (
    <body>
      <BannerContainer
        img={cliff}
        altText="Image d'une falaise avec la mer dechainée en contrebas"
        text="Chez vous, partout et ailleurs"
      />
      <DisplayHousings />
    </body>
  );
}

export default Home
