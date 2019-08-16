import React from 'react';
import Round from './shapes/round';
import TextRow from './shapes/textRow';
import { baseProps } from './shapes/interface';

interface Props extends baseProps {
  animation?: boolean
}

export default class Post extends React.Component<Props> {

  static defaultProps = {
    animation: true
  }

  render() {
    const { className, style, animation, ...set } = this.props;
    const classes = [animation ? 'cl-ContentLoader-animation' : undefined, className].filter(c => c).join(' ');
    return (
      <div className={classes} style={style}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Round
            {...set}
            style={{ width: 60, height: 60, marginRight: 8 }}
          />
          <div style={{ flex: '1' }}>
            <TextRow {...set} style={{ height: 12, width: '40%' }} />
            <TextRow {...set} style={{ height: 8, width: '20%', marginTop: 16 }} />
          </div>
        </div>
        <TextRow {...set} style={{ height: 8, width: '80%', marginTop: 16 }} />
        <TextRow {...set} style={{ height: 8, width: '90%', marginTop: 16 }} />
        <TextRow {...set} style={{ height: 8, width: '60%', marginTop: 16 }} />
      </div>
    );
  }

}