import React from "react";
declare type AlertCallback = () => void;
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
export declare class AlertComponent extends React.Component<AlertComponentProps, AlertComponentState> {
    static defaultProps: {
        showCancel: boolean;
        cancelText: string;
        confirmText: string;
        onConfirm: () => void;
        onCancel: () => void;
        onHide: () => void;
    };
    state: {
        animationClass: string;
    };
    onAnimationEnd(e: React.AnimationEvent): void;
    onCancel(): void;
    onConfirm(): void;
    showContent(): React.ReactElement<any> | undefined;
    render(): React.ReactNode;
}
export default function Alert(option: string | AlertComponentProps): void;
export {};
