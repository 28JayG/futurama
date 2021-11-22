import { useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import { fetchStarsStartAsync } from '../../redux/star/star.actions';
import bgImage from '../../assets/bg-image-decaf.png';

import './characters.styles.scss';
import { sliderConfig } from '../../utils/slider.utils';
import CharacterSquare from '../../components/characters/character-square/character-square.component';

const Characters = ({ stars, loading, selectedStar, fetchStarsStartAsync }) => {
  useEffect(() => {
    //fetch charcters from the fetchStarsAsync service
    fetchStarsStartAsync();
  }, [fetchStarsStartAsync]);

  return (
    <section
      className='characters'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Slider className='c-slider' {...sliderConfig}>
        {stars && stars.map((star) => <CharacterSquare character={star} />)}
      </Slider>
    </section>
  );
};

const mapStateToProps = (state) => ({
  selectedStar: state.stars.selectedStar,
  loading: state.stars.loading,
  stars: state.stars.stars,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStarsStartAsync: () => dispatch(fetchStarsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
