import BannerContainer from "../../components/BannerContainer"
import cliff from "../../assets/cliff.png"
import DisplayLogements from "../../components/DisplayLogements";

function Home() {
  return (
    <div>
      <BannerContainer
        img={cliff}
        altText="Image d'une falaise avec la mer dechainée en contrebas"
        text="Chez vous, partout et ailleurs"
      />
      <DisplayLogements />
    </div>
  );
}

export default Home
