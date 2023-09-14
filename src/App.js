import React from "react";

import BookAdd from "./conponents/BookAdd";
import BookDetails from "./conponents/BookDetails";
import BookEdit from "./conponents/BookEdit";
import BookList from "./conponents/BookList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path={`/book/:bookId`} element={<BookDetails />} />
        <Route path={"/book/add"} element={<BookAdd />} />
        <Route path={`/book/edit/:bookId`} element={<BookEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
