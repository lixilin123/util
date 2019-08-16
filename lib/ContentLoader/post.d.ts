import React from 'react';
import { baseProps } from './shapes/interface';
interface Props extends baseProps {
    animation?: boolean;
}
export default class Post extends React.Component<Props> {
    static defaultProps: {
        animation: boolean;
    };
    render(): JSX.Element;
}
export {};
