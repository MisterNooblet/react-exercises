import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { FamilyTreeProvider } from './components/FamilyTree';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FamilyTreeProvider>
        <App />
    </FamilyTreeProvider>
);
