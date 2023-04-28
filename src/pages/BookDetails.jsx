import { Link, useParams } from "react-router-dom";
import data from "../../data.json";
import { Fragment } from "react";

const BookDetails = () => {
  const { id } = useParams();
  const book = data.bookData.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Fragment>
      <div>
        <Link to="/">Back</Link>
      </div>
      <div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.publicationDate}</p>
        <p>{book.genre}</p>
        <p>{book.description}</p>
        <p>{book.details}</p>
      </div>
    </Fragment>
  );
};

export default BookDetails;
