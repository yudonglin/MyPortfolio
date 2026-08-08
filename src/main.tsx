import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.tsx';

const container = document.getElementById('root')!;

const app = (
    <StrictMode>
        <App/>
    </StrictMode>
);

// The production build prerenders the page into #root, so hydrate over that
// markup rather than throwing it away. `vite dev` serves the container empty,
// where a fresh client render is the correct path.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
