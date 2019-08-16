import React from "react";
import ReactDOM from "react-dom";

interface ToastComponentProps {
  content: string;
  duration?: number;
  onEnd?: () => void;
}

interface ToastComponentState {
  show: boolean;
}

export class ToastComponent extends React.Component<
  ToastComponentProps,
  ToastComponentState
> {
  container = React.createRef<HTMLDivElement>();
  static defaultProps = {
    duration: 3000,
    onEnd: undefined
  };

  state: ToastComponentState = {
    show: false
  };

  componentDidMount(): void {
    const el = this.container.current as HTMLDivElement;
    el.classList.add("cl-Toast-show");
    window.setTimeout(() => {
      el.classList.remove("cl-Toast-show");
      el.classList.add("cl-Toast-hide");
    }, this.props.duration);
  }

  onTransitionEnd(): void {
    const el = this.container.current as HTMLDivElement;
    if (
      el.classList.contains("cl-Toast-hide") &&
      typeof this.props.onEnd === "function"
    ) {
      this.props.onEnd();
    }
  }

  render(): React.ReactNode {
    return (
      <div
        className="cl-Toast"
        onTransitionEnd={this.onTransitionEnd.bind(this)}
        ref={this.container}
      >
        {this.props.content}
      </div>
    );
  }
}

export default class Toast {
  container: Element;
  constructor(content: string, duration: number = 3000) {
    this.container = document.createElement("div");
    document.body.appendChild(this.container);
    ReactDOM.render(
      <ToastComponent
        content={content}
        duration={duration}
        onEnd={()=>{
          // 这里是完全结束，需要清理
          ReactDOM.unmountComponentAtNode(this.container);
          this.container.remove();
        }}
      />,
      this.container
    );
  }
}
