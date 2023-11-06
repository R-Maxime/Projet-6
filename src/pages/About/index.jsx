import BannerContainer from '../../components/BannerContainer';
import mountain from '../../assets/mountain.png';
import Dropdown from '../../components/Dropdown';
import '../../styles/About.scss';

function About() {
  const dropdownInfos = [
    {
      text: ['Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'],
      itemType: 'Fiabilité'
    },
    {
      text: ['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme..'],
      itemType: 'Respect'
    },
    {
      text: ['Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'],
      itemType: 'Service'
    }, {
      text: ['La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'],
      itemType: 'Sécurité'
    }
  ];

  return (
    <div className='about'>
      <BannerContainer
        img={mountain}
        altText="Image d'une montagne enneigée"
        text="À propos"
      />
      <div className='about-dropdown'>
        {dropdownInfos.map((dropdownInfo, index) => (
          <Dropdown key={index} items={dropdownInfo.text} itemType={dropdownInfo.itemType} />
        ))}
      </div>
    </div>
  );
}

export default About;
