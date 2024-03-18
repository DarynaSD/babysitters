import { fetchNannies } from "../firebase/fetchNannies";
import List from "../components/List";
import { useEffect, useState } from "react";

const NanniesPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const fetched = await fetchNannies();
    setData(fetched);
}

    useEffect(() => {
      if (!data || !data.length) {
        fetchData();
        console.log("data in page >>", data);
      }
    }, [data]);


  return (
    <section>
      <div>im NanniesPage</div>
      <List data={data} />
    </section>
  );
};

export default NanniesPage;
