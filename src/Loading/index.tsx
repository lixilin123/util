import React from "react";
import ReactDOM from "react-dom";

export function LoadingComponent(): React.ReactElement<{}> {
  return (
    <div className="cl-Loading-mask">
      <div className="cl-Loading">
        <div className="cl-Loading-container">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default class Loading {
  container: Element;
  constructor(){
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
    ReactDOM.render(<LoadingComponent />, this.container);
  }

  destroy(){
    ReactDOM.unmountComponentAtNode(this.container);
    this.container.remove();
  }
}
