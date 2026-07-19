import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import ErrorBoundary from "./components/ErrorBoundary";
import { LanguageProvider } from "./context/LanguageContext";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <CustomCursor />
        <BrowserRouter>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="service/:slug" element={<ServiceDetail />} />
              </Route>
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}
