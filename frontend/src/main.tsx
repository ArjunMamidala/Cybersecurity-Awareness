import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css'
// 1. GHOST COMPONENTS (Internal placeholders so the app runs without external files)
const Placeholder = ({ name }: { name: string }) => (
  <div className="p-8">
    <h1 className="text-2xl font-bold">{name} Page</h1>
    <p className="text-gray-500">Replace this component in your routes once created.</p>
  </div>
);

const RootLayout = () => (
  // Testing bg-slate-950 (dark) and indigo accents
  <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
    <nav className="p-4 border-b border-slate-800 bg-slate-900 flex justify-between items-center">
       <span className="text-indigo-400 font-bold tracking-tight">DEV_CONNECT</span>
       <div className="flex gap-4 text-sm text-slate-400">
         <span className="hover:text-white cursor-pointer transition">Docs</span>
         <span className="hover:text-white cursor-pointer transition">NCSU Portal</span>
       </div>
    </nav>
    <main className="flex-grow flex items-center justify-center">
      <div className="bg-slate-900 border border-slate-800 p-12 rounded-3xl shadow-2xl">
        <Outlet /> 
      </div>
    </main>
    <footer className="p-4 border-t border-slate-900 text-center text-xs text-slate-600 uppercase tracking-widest">
      © 2026 • Built for Software Engineers
    </footer>
  </div>
);
// 2. ROUTE CONFIGURATION
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Placeholder name="Home" />,
      },
      /* EXAMPLE: Adding a new page
      1. Create src/pages/ProfilePage.tsx
      2. Import it: import ProfilePage from "./pages/ProfilePage";
      3. Add to children:
         { path: "profile", element: <ProfilePage /> }
      */
    ],
  },
  {
    path: "/login",
    element: <Placeholder name="Login" />,
    /* EXAMPLE: Using a Wrapper
    element: (
      <AuthWrapper>
        <LoginForm />
      </AuthWrapper>
    )
    */
  },
  {
    path: "*",
    element: <Placeholder name="404 Not Found" />,
  },
]);

// 3. RENDER
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);