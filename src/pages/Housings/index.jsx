import { useParams } from 'react-router-dom';
import HousingUtils from '../../datas/HousingUtils';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import Carousel from '../../components/Carousel';
import '../../styles/Housings.scss';
import Tag from '../../components/Tag';
import Host from '../../components/Host';
import Rate from '../../components/Rate';
import Collapse from '../../components/Collapse';
import NotFound from '../Error';

function Housings() {
  const housingId = useParams().id;
  const [housing, setHousing] = useState({});
  const [isDataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    async function fetchHousing() {
      setDataLoading(true);
      try {
        const lgmt = await HousingUtils.getHousingById(housingId);
        setHousing(lgmt);
      } catch (err) {
        console.error(err);
      } finally {
        setDataLoading(false);
      }
    }
    fetchHousing();
  }, [housingId]);

  if (isDataLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (!housing) {
    return <NotFound />;
  }

  return (
    <div className='housing'>
      <Carousel pictures={housing.pictures} />
      <div className='housing-info'>
        <div className='housing-title'>
          <div className='title'>
            <h1>{housing.title}</h1>
            <h2>{housing.location}</h2>
          </div>
          <div className='tags'>
            {housing.tags && housing.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div className='housing-host'>
          <Host host={housing.host} />
          <Rate rate={Number(housing.rating)} />
        </div>
      </div>
      <div className='housing-collapse'>
        <Collapse items={[housing.description]} itemType='Description' />
        <Collapse items={housing.equipments} itemType='Équipements' />
      </div>
    </div >
  );
}

export default Housings;
