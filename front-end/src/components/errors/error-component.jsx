import React from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error.styles';

class CatchError extends React.Component {
    constructor() {
        super();

        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        // processes the error
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {

        if ( this.state.hasError ) {
            return (
            <ErrorImageOverlay> 
                <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
                <ErrorImageText> Something went wrong, Please try again.
                </ErrorImageText> 
            </ErrorImageOverlay>
            );
            }
            return this.props.children;
    }
}

export default CatchError;