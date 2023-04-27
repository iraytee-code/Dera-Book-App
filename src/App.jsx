import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book-details" element={<BookDetails />} />
      </Routes>
    </Fragment>
  );
}

export default App;
