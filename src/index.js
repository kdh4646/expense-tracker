/*
    "index.js" file is the first file to be excuted.
*/

import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

/*
    1. indicating div id="root" in "index.html"
    2. ReactDOM use createRoot() to let div id="root" become a root.
    3. div is the common way to select root.
    4. Then use render() for rendering content at div id="root"
    5. Content is App from App.js which is JSX (JavaScript XML).
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
