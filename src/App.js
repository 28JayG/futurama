import { useEffect } from 'react';
import { fetchStarsStartAsync, setStar } from './redux/star/star.actions';
import { connect } from 'react-redux';

import StarOverview from './components/star-overview/star-overview.component';
import StarDetails from './components/star-details/star-details.component';

import './App.scss';
import { getSelectedStar } from './utils/stars.utils';
import Loader from './components/loader/loader.component';

const App = ({
  loading,
  stars,
  fetchStarsStartAsync,
  selectedStar,
  setStar,
}) => {
  useEffect(() => {
    //fetch charcters from the fetchStarsAsync service
    fetchStarsStartAsync();
  }, [fetchStarsStartAsync]);

  const onClose = () => setStar(null);

  return (
    <div className='app'>
      <h3 className='app-title'>Futurama Stars</h3>
      <div className='stars-container'>
        {stars ? (
          stars.map(({ name, images, id }) => (
            <StarOverview
              name={name}
              key={id}
              imageUrl={images && images.main}
              onClick={() => setStar(id)}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
      {selectedStar && (
        <StarDetails
          open={!!selectedStar}
          onClose={onClose}
          star={getSelectedStar(selectedStar, stars)}
        />
      )}
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
