import React from 'react'
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {

        return { hasError: true }
    }

    componentDidCatch(error, info) {

    }

    render() {
        return this.state.hasError ?
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl={'https://i.imgur.com/yW2W9SC.png'} />
                <ErrorImageText>An error occured</ErrorImageText>
            </ErrorImageOverlay> : <div>{this.props.children}</div>
    }
}

export default ErrorBoundary