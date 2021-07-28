import './star-overview.styles.scss';

const StarOverview = ({ name, imageUrl, ...otherProps }) => {
  return (
    <div className='star-preview' {...otherProps}>
      <div
        className='sp-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <h4 className='sp-name'>{`${name.first} ${name.last}`}</h4>
    </div>
  );
};

export default StarOverview;
