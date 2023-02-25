import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button type="button" key={option} onClick={() => onFeedback(option)}>
          {option}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.node,
  onFeedback: PropTypes.func.isRequired,
};
