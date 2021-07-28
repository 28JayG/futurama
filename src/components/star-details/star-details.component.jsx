import { useRef, useEffect } from 'react';
import './star-details.styles.scss';

const StarDetails = ({ selectedStarId, open, onClose }) => {
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

  return (
    <div className='sd-container'>
      <div className='sd-card' ref={modalRef}>
        <div className='sd-image'></div>
        <div className='sd-details'></div>
      </div>
    </div>
  );
};

export default StarDetails;
