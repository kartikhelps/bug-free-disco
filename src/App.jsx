import CustomCard from "./components/Card";
import ComplexGrid from "./components/CardGrid";
import { useEffect, useState } from "react";
import axios from "axios";
import { First } from "./First";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(
      import.meta.env.VITE_REACT_API_URL + "api/properties/list",
      setData
    );
  }, []);

  async function fetchData(url, setData) {
    try {
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(data);

  return (
    <>
      <ComplexGrid />
      {/* <First/> */}
    </>
  );
}

export default App;
