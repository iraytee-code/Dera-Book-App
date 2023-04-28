import { Fragment, useState } from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";
import SearchBar from "../components/FormFields/SearchBar";

const BookList = () => {
  const bookList = data.bookData;

  const [page, setPage] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 10;

  console.log(bookList);

  const genres = bookList.map((obj) => obj.genre);
  const uniqueGenres = [...new Set(genres)];
  uniqueGenres.push("All");

  const filteredData =
    selectedGenre === "All"
      ? bookList
      : bookList.filter((data) => data.genre === selectedGenre);

  const searchedData =
    searchTerm === ""
      ? filteredData
      : filteredData.filter(
          (data) =>
            data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.author.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  const totalPages = Math.ceil(searchedData.length / pageSize);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleFilter = (event) => {
    setSelectedGenre(event.target.value);
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const start = page * pageSize;
  const end = start + pageSize;
  const dataToShow = searchedData.slice(start, end);

  return (
    <Fragment>
      <div className="flex justify-between items-center py-3">
        <div className="">
          Filter by Genre:
          <select
            className="text-black"
            value={selectedGenre}
            onChange={handleFilter}>
            {uniqueGenres?.map((genre, index) => (
              <option key={index + 1} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <SearchBar
          title="Search by Title or Author:"
          className="text-black"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-center">
            <th className="p-2 text-sm">Title</th>
            <th className="p-2 text-sm">Author</th>
            <th className="p-2 text-sm">Publication Date</th>
            <th className="p-2 text-sm">Genre</th>
            <th className="p-2 text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataToShow?.map((book) => (
            <tr key={book.id} className="border-b border-gray-200 text-center">
              <td className="p-2">{book.title}</td>
              <td className="p-2">{book.author}</td>
              <td className="p-2">{book.publicationDate}</td>
              <td className="p-2">{book.genre}</td>
              <td className="p-2">
                <Link to={`/book-details/${book.id}`}>details</Link>
              </td>
            </tr>
          ))}
        </tbody>{" "}
      </table>
      <div className="flex justify-between py-3">
        <button onClick={handlePrevPage} disabled={page === 0}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={page === totalPages - 1}>
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default BookList;
