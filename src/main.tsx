import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import adminRoutes from '@/router/admin';
import webRoutes from '@/router/web';

const router = createBrowserRouter([
    webRoutes,
    adminRoutes
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
