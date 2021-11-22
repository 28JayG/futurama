import { Link } from 'react-router-dom';

import { AppRoutes } from '../../../constants/routes';

import './explore-button.styles.scss';

const ExploreButton = () => {
  return (
    <Link to={AppRoutes.CHARACTERS}>
      <div className='wb-btn-outer'>
        <div className='wb-inner'>Explore!</div>
      </div>
    </Link>
  );
};

export default ExploreButton;
