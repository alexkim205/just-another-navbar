import React from 'react';

export const Close = function Close (props) {
  return React.createElement('path',
    {fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,3 L21,21 M3,21 L21,3'},
  );
};