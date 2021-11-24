import './detail.styles.scss';

const Detail = ({ _key, value }) => (
  <div className='sd-grid-item'>
    <p className='sdg-key'>{_key}:</p>
    <p className='sdg-value'>{value}</p>
  </div>
);

export default Detail;
