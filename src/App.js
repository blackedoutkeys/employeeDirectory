import React from "react";
import Table from "./components/Table/Table";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search"
import SubmitButton from "./utility/SubmitButton";

function App() {
  return (
    <>
    <Header />
    <Search />
    <SubmitButton />
    <Table />
    </>
  )
}

export default App;