import PropTypes from 'prop-types';
import { List, StatText } from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <StatText>Good: {good}</StatText>
      <StatText>Neutral: {neutral}</StatText>
      <StatText>Bad: {bad}</StatText>
      <StatText>Total: {total}</StatText>
      <StatText>Positive feedback: {positivePercentage}%</StatText>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
