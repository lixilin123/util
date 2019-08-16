import React from "react";
import ReactDOM from "react-dom";

type AlertCallback = () => void;

interface AlertComponentProps {
  showCancel?: boolean;
  content: string | React.ReactElement<any>;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: AlertCallback;
  onCancel?: AlertCallback;
  onHide?: AlertCallback;
}

interface AlertComponentState {
  animationClass: string;
}

export class AlertComponent extends React.Component<
  AlertComponentProps,
  AlertComponentState
> {
  static defaultProps = {
    showCancel: false,
    cancelText: "取消",
    confirmText: "确定",
    onConfirm: () => {},
    onCancel: () => {},
    onHide: () => {}
  };

  state = {
    animationClass: "cl-Alert-show"
  };

  onAnimationEnd(e: React.AnimationEvent) {
    if (e.animationName === "cl-Alert-hide") {
      (this.props.onHide as AlertCallback)();
    }
  }

  onCancel() {
    this.setState({ animationClass: "cl-Alert-hide" });
    (this.props.onCancel as AlertCallback)();
  }

  onConfirm() {
    this.setState({ animationClass: "cl-Alert-hide" });
    (this.props.onConfirm as AlertCallback)();
  }

  showContent() {
    if (typeof this.props.content === "string") {
      return <p className="cl-Alert-content">{this.props.content}</p>;
    }
    if(React.isValidElement(this.props.content)) {
      return this.props.content;
    }
  }

  render(): React.ReactNode {
    return (
      <div className="cl-Alert">
        <div
          className={`cl-Alert-container ${this.state.animationClass}`}
          onAnimationEnd={this.onAnimationEnd.bind(this)}
        >
          {this.showContent()}
          <div className="cl-Alert-btn">
            {this.props.showCancel ? (
              <div
                className="cl-Alert-cancel"
                onClick={this.onCancel.bind(this)}
                onTouchStart={() => {}}
              >
                {this.props.cancelText}
              </div>
            ) : null}
            <div
              className="cl-Alert-confirm"
              onClick={this.onConfirm.bind(this)}
              onTouchStart={() => {}}
            >
              {this.props.confirmText}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function Alert(option: string | AlertComponentProps) {
  let props: AlertComponentProps;
  if (typeof option === "string") {
    props = {
      content: option
    };
  } else if (typeof option === "object") {
    props = option;
  } else {
    throw new Error("无效的参数");
  }

  const container = document.createElement("div");
  document.body.appendChild(container);

  props.onHide = () => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  };

  ReactDOM.render(<AlertComponent {...props} />, container);
}
