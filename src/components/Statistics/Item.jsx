import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Item = ({ stat: { label, percentage } }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
};

Item.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
