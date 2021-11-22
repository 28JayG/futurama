import { connect } from 'react-redux';

import { setStar } from '../../../redux/star/star.actions';

import './character-square.styles.scss';

const CharacterSquare = ({ character, setStar, selectedStar }) => {
  return (
    <div
      className={`cs ${selectedStar === character.id ? 'active' : ''}`}
      onClick={() => setStar(character.id)}
    >
      <div className='cs-border'></div>
      <img className='cs-img' src={character.images.main} alt='' />
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedStar: state.stars.selectedStar,
});

const mapDispatchToProps = (dispatch) => ({
  setStar: (id) => dispatch(setStar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSquare);
