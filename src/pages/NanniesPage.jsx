// import { fetchNannies } from "../firebase/fetchNannies";
import List from "../components/List";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNannies } from "../redux/selectors";
import { fetchAllNannies } from "../redux/thunk";
import { Section, Wrap } from "./styled/main.styled";

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
    <Wrap>
    <Section>
      <List data={data} />
    </Section>
    </Wrap>
  );
};

export default NanniesPage;
