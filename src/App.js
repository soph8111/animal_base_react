import "./App.css";

import Table from "./components/Table";
import FilterButtons from "./components/Filter";
import RemoveOther from "./components/RemoveOther";
import RemoveAorB from "./components/RemoveAorB";

function App() {
  const animals = [
    {
      fullname: "Mandu the amazing cat",
      age: 9,
    },
    {
      fullname: "Mia the black cat",
      age: 9,
    },
    {
      fullname: "Leeloo the growing dog",
      age: 1,
    },
    {
      fullname: "Toothless the trained dragon",
      age: 14,
    },
    {
      fullname: "ScoobyDoo the wondering dog",
      age: 58,
    },
    {
      fullname: "Horsey the horsing horse",
      age: 10,
    },
  ];

  return (
    <section>
      <h1>Animals</h1>
      <FilterButtons />
      <hr />
      <Table animals={animals} />
      <RemoveOther />
      <RemoveAorB />
    </section>
  );
}

export default App;
