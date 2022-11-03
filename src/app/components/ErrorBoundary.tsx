import { transparentize } from 'polished';
import { Component, PropsWithChildren } from 'react';
import ErrorDisplay from './ErrorDisplay';

interface Props {
  component?: string;
}

interface State {
  hasError: boolean;
  error?: {
    message?: string;
  };
}

class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: { message: error.message } };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: 24,
            border: `1px solid ${transparentize(0.9, '#FFF')}`,
          }}
        >
          <ErrorDisplay message={this.state.error?.message} title={`Erro ao renderizar ${this.props.component || 'componente'}`}></ErrorDisplay>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
