import { Component } from 'react';
import AppError from '../app-error/app-error';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);

    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <AppError message={'Something went wrong'} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
