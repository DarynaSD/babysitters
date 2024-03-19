// import { fetchNannies } from "../firebase/fetchNannies";
import List from "../components/List";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNannies } from "../redux/selectors";
import { fetchAllNannies } from "../redux/thunk";

const NanniesPage = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectNannies);
  console.log("data from selector >>", data);

    useEffect(() => {
      if (!data || !data.length) {
        dispatch(fetchAllNannies());
      }
    }, [dispatch, data]);


  return (
    <section>
      <div>im NanniesPage</div>
      <List data={data} />
    </section>
  );
};

export default NanniesPage;
