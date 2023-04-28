import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import Header from "./components/Navbar/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <div className="container mx-auto px-10">
          <Header />
          <div className="flex flex-col h-[70vh] md:h-[87vh] relative w-full mt-10">
            <Routes>
              <Route path="/" element={<BookList />} />
              <Route path="/book-details/:id" element={<BookDetails />} />
            </Routes>
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
