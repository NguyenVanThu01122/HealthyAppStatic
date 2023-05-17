import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { Suspense } from "react";
import TopPage from "./pages/TopPage";
import "./App.css";
import Header from "components/Header";
import MyRecord from "pages/MyRecord";
import ColumnPage from "pages/ColumnPage";
import Footer from "components/Footer";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TopPage />,
    },
    {
      path: "/my-record",
      element: <MyRecord />
    },
    {
      path: "/column-page",
      element: <ColumnPage />
    }
  ]);

  return (
    <Suspense fallback="loading">
      <QueryClientProvider client={queryClient}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
