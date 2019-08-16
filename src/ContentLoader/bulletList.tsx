import React from 'react';
import Round from './shapes/round';
import TextRow from './shapes/textRow';
import { baseProps } from './shapes/interface';

interface Props extends baseProps {
  animation?: boolean,
  lines?: number
}

export default class BulletList extends React.Component<Props> {

  static defaultProps = {
    animation: true
  }

  render() {
    const { className, style, animation, lines, ...set } = this.props;
    const classes = [animation ? 'cl-ContentLoader-animation' : undefined, className].filter(c => c).join(' ');
    return (
      <div className={classes} style={style}>
        {
          Array.from({length: lines || 4}).map((item: any,index: number)=>{
            return (
              <div key={index} style={{display: 'flex', alignItems: 'center', marginTop: index === 0 ? 'auto' : 12}}>
                <Round {...set} style={{ width: 12, height: 12, marginRight: 8 }} />
                <TextRow {...set} style={{ height: 8, flex: '1' }} />
              </div>
            )
          })
        }
      </div>
    );
  }

}