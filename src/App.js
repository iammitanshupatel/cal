import { useState } from "react";
import Calendar from "./components/Calendar";

const App = () => {
  const firstValue = "03/10/2022";
  const secondValue = "23/03/2020";
  return <Calendar value={firstValue} />;
};

export default App;
