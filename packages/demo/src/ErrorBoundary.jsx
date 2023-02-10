import React,{PureComponent, Fragment } from "react";

export class ErrorBoundary extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch', error, errorInfo)
    }

    render() {
        if (this.state.error) return <pre
            style={ { color: 'red', whiteSpace: 'pre-wrap' } }>{ this.state.error.message }</pre>;
        return <Fragment>{ this.props.children }</Fragment>;
    }
}
