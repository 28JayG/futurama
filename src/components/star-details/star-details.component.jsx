import { useRef, useEffect } from 'react';

import Saying from './saying/saying.component';
import { FiX } from 'react-icons/fi';

import './star-details.styles.scss';

const StarDetails = ({ open, onClose, star }) => {
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current.contains(e.target)) {
      return;
    }

    onClose();
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    <div className='sd-container'>
      <div className='sd-card' ref={modalRef}>
        <FiX className='sd-close' onClick={onClose} />

        <div
          className='sd-image'
          style={{ backgroundImage: `url(${images && images.main})` }}
        />

        <div className='sd-details'>
          <h3 className='sd-name'>{`${name.first} ${name.middle} ${name.last}`}</h3>
          <h5 className='sd-species'>{`${age} . ${species}`}</h5>

          <div className='sd-other-details'>
            <p>
              <strong>Home Planet : </strong>
              {homePlanet}
            </p>
            <p>
              <strong>Gender : </strong>
              {gender}
            </p>
            <p>
              <strong>Occupation : </strong>
              {occupation}
            </p>
          </div>

          <p>
            <strong>Sayings : </strong>
          </p>
          <div className='sd-sayings'>
            {sayings.map((saying) => (
              <Saying saying={saying} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarDetails;
