import React from 'react';

export default function createElement({
  componentObj,
  props
}) {
  return React.createElement(componentObj, props);
}
