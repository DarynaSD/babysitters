// import { fetchNannies } from "../firebase/fetchNannies";
import List from "../components/List";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNannies } from "../redux/selectors";
import { fetchAllNannies } from "../redux/thunk";

const NanniesPage = () => {
  const dispatch = useDispatch;
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     const fetched = await fetchNannies();
//     setData(fetched);
  // }
  
  const data = useSelector(selectNannies);
 dispatch(fetchAllNannies());
  // console.log("data from selector >>", data);

  //   useEffect(() => {
  //     if (!data || !data.length) {
  //       // fetchData();
  //       dispatch(fetchAllNannies());

  //     }
  //   }, [dispatch, data]);


  return (
    <section>
      <div>im NanniesPage</div>
      <List data={data} />
    </section>
  );
};

export default NanniesPage;
