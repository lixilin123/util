import React from 'react';
import { baseProps } from './interface';

export default class TextRow extends React.Component<baseProps> {

  static defaultProps = {
    color: '#ccc'
  }

  render() {
    const { className, style, color } = this.props;

    const defaultStyles = {
      backgroundColor: color,
      width: '100%',
      height: '1em',
      borderRadius: '0.4em'
    };

    const classes = ['cl-text-row', className].filter(c => c).join(' ');

    return <div className={classes} style={{ ...defaultStyles, ...style }}></div>
  }

}