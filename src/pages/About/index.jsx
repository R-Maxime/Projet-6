import BannerContainer from '../../components/BannerContainer';
import mountain from '../../assets/mountain.png';

function About() {
  return (
    <div>
      <BannerContainer
        img={mountain}
        altText="Image d'une montagne enneigée"
        text="À propos"
      />
    </div>
  );
}

export default About;
