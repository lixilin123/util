import React from 'react';
import { baseProps } from './interface';
export default class TextRow extends React.Component<baseProps> {
    static defaultProps: {
        color: string;
    };
    render(): JSX.Element;
}
