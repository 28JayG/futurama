import { useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import bgImage from '../../assets/bg-image-decaf.png';
import { fetchStarsStartAsync } from '../../redux/star/star.actions';
import { sliderConfig } from '../../utils/slider.utils';
import { getSelectedStar } from '../../utils/stars.utils';

import CharacterSquare from '../../components/characters/character-square/character-square.component';
import StarDetails from '../../components/characters/star-details/star-details.component';
import Loader from '../../components/loader/loader.component';

import './characters.styles.scss';

const Characters = ({ stars, loading, selectedStar, fetchStarsStartAsync }) => {
  useEffect(() => {
    //fetch charcters from the fetchStarsAsync service
    fetchStarsStartAsync();
  }, [fetchStarsStartAsync]);

  if (loading) return <Loader />;

  return (
    <section
      className='characters'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {stars && <StarDetails star={getSelectedStar(selectedStar, stars)} />}
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
