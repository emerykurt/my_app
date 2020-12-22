import React from 'react';

const Info = props => (
  <span>{props.items.length} remaining out of {props.items.length} task</span>
);

export default Info;