import { useEffect, useState } from "react";
import { getData } from "./api/endPoint";

const App = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setApiData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (!apiData) return <h1>Data is loading...</h1>;

  return <div>Data : {apiData.data.message || "Data not found"}</div>;
};

export default App;
