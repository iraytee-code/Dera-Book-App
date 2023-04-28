import { Link, useParams } from "react-router-dom";
import data from "../../data.json";
import { Fragment } from "react";
import Button from "../components/Button/Button";

const BookDetails = () => {
  const { id } = useParams();
  const book = data.bookData.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div className="text-red-500">Book not found</div>;
  }

  return (
    <Fragment>
      <div className="my-10 mb-3 ">
        <Link to="/" className="font-bold mt-10 cursor-pointer">
          <Button title="Back" />
        </Link>
      </div>
      <div className="">
        <div className="xs:p-3 md:p-0 ">
          <div className="font-bold text-3xl mb-3">
            <span className="text-blue-500 pr-4">Book Title:</span>
            <span>{book.title}</span>
          </div>
          <div className="font-bold text-2xl mb-3">
            <span className="text-blue-500 pr-4">Book Author:</span>
            <span>{book.author}</span>
          </div>
          <div className="font-bold text-2xl mb-3">
            <span className="text-blue-500 pr-4">Date Published:</span>
            <span>{book.publicationDate}</span>
          </div>
          <div className="font-bold text-2xl mb-3">
            <span className="text-blue-500 pr-4">Book Genre:</span>
            <span>{book.genre}</span>
          </div>
          <div className="font-bold text-xl mb-3">
            <span className="text-blue-500 pr-4">Book Details:</span>
            <span>{book.details}</span>
          </div>
        </div>
      </div>
      <Link to="/" className="font-bold mt-10 cursor-pointer">
        <Button title="Back" />
      </Link>
    </Fragment>
  );
};

export default BookDetails;
