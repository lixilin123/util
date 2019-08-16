import React from "react";
interface ToastComponentProps {
    content: string;
    duration?: number;
    onEnd?: () => void;
}
interface ToastComponentState {
    show: boolean;
}
export declare class ToastComponent extends React.Component<ToastComponentProps, ToastComponentState> {
    container: React.RefObject<HTMLDivElement>;
    static defaultProps: {
        duration: number;
        onEnd: undefined;
    };
    state: ToastComponentState;
    componentDidMount(): void;
    onTransitionEnd(): void;
    render(): React.ReactNode;
}
export default class Toast {
    container: Element;
    constructor(content: string, duration?: number);
}
export {};
