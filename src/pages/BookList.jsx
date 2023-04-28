import { Fragment, useState } from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";
import SearchBar from "../components/FormFields/SearchBar";
import SelectField from "../components/FormFields/SelectField";
import Button from "../components/Button/Button";

const BookList = () => {
  //store the json data into a variable
  const bookList = data.bookData;

  //set diffrent states for page pagination, seachParameters and filter parameters
  const [page, setPage] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // set page size
  const pageSize = 10;

  console.log(bookList);

  // get the genre from json folder to be used for filter logic
  const genres = bookList.map((obj) => obj.genre);
  const uniqueGenres = [...new Set(genres)];
  uniqueGenres.push("All");

  // filter data logic
  const filteredData =
    selectedGenre === "All"
      ? bookList
      : bookList.filter((data) => data.genre === selectedGenre);

  // search data logic
  const searchedData =
    searchTerm === ""
      ? filteredData
      : filteredData.filter(
          (data) =>
            data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.author.toLowerCase().includes(searchTerm.toLowerCase()),
        );
  // pagination logic
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

  const itemShown = dataToShow.length;
  console.log(start, end, pageSize, page);

  return (
    <Fragment>
      <div className="md:container mx-auto my-4 max-w-screen-lg ">
        <div className="">
          <div className="flex justify-between items-center xs:flex-col md:flex-row xs:py-10 md:py-5">
            <SelectField
              data={uniqueGenres}
              title="Filter by Genre:"
              onChange={handleFilter}
              value={selectedGenre}
            />
            <SearchBar
              title="Search by Title or Author:"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="shadow border-b border-gray-200 xs:rounded-lg xs:overflow-scroll md:overflow-hidden">
            <table className="w-full divide-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-center">
                  <th className="px-6 py-3 xs:p-2 md:p-2 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 xs:p-2 md:p-2 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 xs:p-2 md:p-2 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Publication Date
                  </th>
                  <th className="px-6 py-3 xs:p-2 md:p-2 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Genre
                  </th>
                  <th className="px-6 py-3 xs:p-2 md:p-2 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataToShow?.map((book) => (
                  <tr
                    key={book.id}
                    className="border-b border-gray-200 text-center">
                    <td className="px-6 py-3 xs:p-2 md:p-2  text-xs text-start ">
                      {book.title}
                    </td>
                    <td className="px-6 py-3 xs:p-2 md:p-2  text-xs text-start ">
                      {book.author}
                    </td>
                    <td className="px-6 py-3 xs:p-2 md:p-2  text-xs text-start ">
                      {book.publicationDate}
                    </td>
                    <td className="px-6 py-3 xs:p-2 md:p-2 text-xs text-start ">
                      {book.genre}
                    </td>
                    <td className="px-6 py-3 xs:p-2 md:p-2  text-xs text-start  underline decoration-3 text-blue-500 ">
                      <Link to={`/book-details/${book.id}`}>details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-3">
        <Button
          onClick={handlePrevPage}
          disabled={page === 0}
          title="Previous"
        />
        <div className="flex items-center justify-around">
          <div className="">Showing Items {itemShown}</div>
        </div>
        <div className="">Page: {page}</div>
        <Button
          onClick={handleNextPage}
          disabled={page === totalPages - 1}
          title=" Next"
        />
      </div>
    </Fragment>
  );
};

export default BookList;
