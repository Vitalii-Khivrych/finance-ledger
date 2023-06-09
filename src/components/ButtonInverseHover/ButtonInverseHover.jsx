import React from 'react';
import PropTypes from 'prop-types';

import { ButtonInverseStyled } from './ButtonInverseHover.styled';

export const ButtonInverseHover = ({ children, width, blue, post }) => {
  return (
    <ButtonInverseStyled width={width} blue={blue} post={post}>
      {children}
    </ButtonInverseStyled>
  );
};

ButtonInverseHover.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
  blue: PropTypes.bool,
};
