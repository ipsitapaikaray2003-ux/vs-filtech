import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error('CRITICAL REACT APP CRASH:', error, info);
    this.setState({ error, info });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px 20px',
          maxWidth: '850px',
          margin: '40px auto',
          background: '#fef2f2',
          border: '2px solid #ef4444',
          borderRadius: '16px',
          fontFamily: 'monospace',
          color: '#991b1b',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#dc2626', marginBottom: '12px', fontSize: '1.4rem' }}>Application Error</h2>
          <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>{this.state.error?.toString()}</p>
          <pre style={{
            background: '#ffffff',
            padding: '16px',
            borderRadius: '8px',
            overflow: 'auto',
            border: '1px solid #fecaca',
            fontSize: '12px',
            lineHeight: '1.5'
          }}>
            {this.state.error?.stack}
            {'\nComponent Stack:\n'}
            {this.state.info?.componentStack}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '16px',
              padding: '10px 20px',
              background: '#dc2626',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Reload Application
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

