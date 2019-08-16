import React from 'react';
import { baseProps } from './interface';

export default class Rect extends React.Component<baseProps> {

  static defaultProps = {
    color: '#ccc'
  }

  render() {
    const { className, style, color } = this.props;

    const defaultStyles = {
      backgroundColor: color,
      width: '100%',
      height: '100%'
    };

    const classes = ['cl-rect-shape', className].filter(c => c).join(' ');

    return <div className={classes} style={{ ...defaultStyles, ...style }}></div>
  }

}