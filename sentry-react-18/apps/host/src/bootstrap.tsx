import App from './App';
import { createRoot } from 'react-dom/client';
import './sentry-config';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
