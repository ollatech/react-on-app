import React from 'react';

export default function createElement({
  componentObj,
  props,
  context
}) {
  return React.createElement(componentObj, props);
}
