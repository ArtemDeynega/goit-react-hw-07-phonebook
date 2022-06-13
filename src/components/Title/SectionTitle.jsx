import PropTypes from 'prop-types';

import { Title } from './SectionTitle.styled';

export const SectionTitle = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
