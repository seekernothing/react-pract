import React, { useEffect } from "react";
import { setBooks, sortByAuthors, toggleByAuthor } from "./bookSlice";
import { useDispatch, useSelector } from "react-redux";

const Books = () => {
  const dispatch = useDispatch();
  const { books, authors, checkedAuthor } = useSelector((state) => state.books);
  useEffect(() => {
    const apiKey = "jXQC2yPtK1jGWWb7ylbKoAxAPGZuijLG";

    const fetchApi = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=${apiKey}`
        );
        if (!res.ok) throw new Error("Api request failed");

        const data = await res.json();
        dispatch(setBooks(data?.results?.books));

        const authors = [
          ...new Set(data?.results?.books?.map((b) => b.author)),
        ];
        dispatch(sortByAuthors(authors));
      } catch (error) {
        console.error("error is:", error);
      }
    };

    fetchApi();
  }, []);

  return (
    <div>
      <div className="authors">
        {/* div to display authors */}

        {authors.map((aut) => {
          return (
            <label key={aut}>
              <input
                type="checkbox"
                checked={checkedAuthor.includes(aut)}
                onChange={() => dispatch(toggleByAuthor(aut))}
              />
              {aut}
            </label>
          );
        })}
      </div>

      <h1>Books & Authors</h1>

      <div>
        {/* to display books */}
        <ul className="ul">
          {books.map((b, idx) => (
            <li key={idx}>
              <b> {b.title}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Books;
