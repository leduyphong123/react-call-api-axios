import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_MANAGEMENT_API } from "../constant/AppConstant";

function BookAdd() {
  const { bookId } = useParams();
  console.log(bookId);
  const isCreate = !bookId;
  const [book, setBook] = useState({});
  console.log(isCreate);
  useEffect(() => {
    if (bookId) {
      axios
        .get(`${BOOK_MANAGEMENT_API}/books/${bookId}`)
        .then((res) => {
          setBook(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [bookId]);

  function handleChange(event) {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    axios
      .post(`${BOOK_MANAGEMENT_API}/books`, book)
      .then((res) => {
        alert(
          `${isCreate ? "Create" : "Edit"} book ${JSON.stringify(
            res.data
          )} successfully!!!`
        );
        window.location.href = "/";
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <div>
      <h1>Book Add</h1>
      <form>
        <div>
          <label>Title</label>
          <input
            name="title"
            value={book.title || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            name="quantity"
            value={book.quantity || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default BookAdd;
