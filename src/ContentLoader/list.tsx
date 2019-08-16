import React from 'react';
import TextRow from './shapes/textRow';
import { baseProps } from './shapes/interface';

interface Props extends baseProps {
  animation?: boolean
}

export default class List extends React.Component<Props> {

  static defaultProps = {
    animation: true
  }

  render() {
    const { className, style, animation, ...set } = this.props;
    const classes = [animation ? 'cl-ContentLoader-animation' : undefined, className].filter(c => c).join(' ');
    return (
      <div className={classes} style={style}>
        <TextRow {...set} style={{ height: 8, width: '90%' }} />
        <TextRow {...set} style={{ height: 8, width: '80%', marginTop: 12, marginLeft: '6%' }} />
        <TextRow {...set} style={{ height: 8, width: '60%', marginTop: 12, marginLeft: '6%' }} />
        <TextRow {...set} style={{ height: 8, width: '90%', marginTop: 12 }} />
        <TextRow {...set} style={{ height: 8, width: '70%', marginTop: 12, marginLeft: '6%' }} />
        <TextRow {...set} style={{ height: 8, width: '30%', marginTop: 12, marginLeft: '6%' }} />
      </div>
    );
  }

}