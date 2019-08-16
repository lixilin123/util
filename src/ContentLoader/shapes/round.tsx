import React from 'react';
import { baseProps } from './interface';

export default class Round extends React.Component<baseProps> {

  static defaultProps = {
    color: '#ccc'
  }

  render() {
    const { className, style, color } = this.props;

    const defaultStyles = {
      backgroundColor: color,
      borderRadius: '50%',
      width: 80,
      height: 80
    };

    const classes = ['cl-round-shape', className].filter(c => c).join(' ');

    return <div className={classes} style={{ ...defaultStyles, ...style }}></div>
  }

}