import ReactDOM from 'react-dom/client';
import { MainContextProvider } from './components/context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MainContextProvider>
        <App />
    </MainContextProvider>
);
