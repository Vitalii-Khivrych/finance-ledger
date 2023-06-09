import React from 'react';
import PropTypes from 'prop-types';

import sprite from 'images/sprite.svg';
import { Svg } from './SvgIcon.styled';

export const SvgIcon = ({ id }) => {
  return (
    <Svg className={id} alt={id} width="20" height="20">
      <use href={`${sprite}#${id}`}></use>
    </Svg>
  );
};

SvgIcon.propTypes = {
  id: PropTypes.string.isRequired,
};
