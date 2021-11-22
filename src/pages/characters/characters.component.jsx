import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchStarsStartAsync, setStar } from '../../redux/star/star.actions';

import './characters.styles.scss';

const Characters = ({
  stars,
  loading,
  selectedStar,
  setStar,
  fetchStarsStartAsync,
}) => {
  useEffect(() => {
    //fetch charcters from the fetchStarsAsync service
    fetchStarsStartAsync();
  }, [fetchStarsStartAsync]);

  return <div></div>;
};

const mapStateToProps = (state) => ({
  selectedStar: state.stars.selectedStar,
  loading: state.stars.loading,
  stars: state.stars.stars,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStarsStartAsync: () => dispatch(fetchStarsStartAsync()),
  setStar: (id) => dispatch(setStar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
