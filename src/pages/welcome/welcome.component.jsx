import bgImage from '../../assets/bg-image.png';
import ExploreButton from '../../components/welcome/explore-button/explore-button.component';

import './welcome.styles.scss';

const Welcome = () => {
  return (
    <section className='welcome' style={{ backgroundImage: `url(${bgImage})` }}>
      <ExploreButton />
    </section>
  );
};

export default Welcome;
