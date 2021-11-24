import Saying from './saying/saying.component';
import Detail from './detail/detail.component';

import './star-details.styles.scss';

const StarDetails = ({ star }) => {
  const {
    images,
    name,
    sayings,
    age,
    gender,
    species,
    homePlanet,
    occupation,
  } = star;

  return (
    <div className='sd-container-main'>
      <h4 className='sd-name'>
        {name.first} {name.last}
      </h4>
      <div className='sd-container'>
        <div className='sd-img-wrap'>
          <img src={images.main} alt='' className='sd-img' />
        </div>
        <div className='sd-details-wrap'>
          <div className='sd-details'>
            <Detail _key='home planet' value={homePlanet} />
            <Detail _key='age' value={age} />
            <Detail _key='gender' value={gender} />
            <Detail _key='species' value={species} />
            <Detail _key='occupation' value={occupation} />
          </div>
          <div className='sd-sayings'>
            <div className='sds-col'>
              {sayings
                .filter((_, index) => index % 2 !== 0)
                .map((saying, index) => (
                  <Saying saying={saying} key={index} />
                ))}
            </div>
            <div className='sds-col'>
              {sayings
                .filter((_, index) => index % 2 === 0)
                .map((saying, index) => (
                  <Saying saying={saying} key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarDetails;
