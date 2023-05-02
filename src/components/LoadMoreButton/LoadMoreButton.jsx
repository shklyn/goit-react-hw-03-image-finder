import PropTypes from 'prop-types';
import { Button } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ loadMore }) => {
  return <Button onClick={loadMore}>Load more</Button>;
};

LoadMoreButton.prototype = {
  loadMore: PropTypes.func.isRequired,
};