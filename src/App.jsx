import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import Header from "./components/Navbar/Header";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <div className="container xs:px-2 mx-auto md:px-10 min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/book-details/:id" element={<BookDetails />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
