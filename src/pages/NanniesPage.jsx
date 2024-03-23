// import { fetchNannies } from "../firebase/fetchNannies";
import List from "../components/List";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  selectNannies } from "../redux/selectors";
import { fetchAllNannies } from "../redux/thunk";
import { Section, Wrap } from "./styled/main.styled";
import Filter from "../components/Filter";

const NanniesPage = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectNannies);
  // const filter = useSelector(selectFilter);
  const filter = 'z-to-a';
  const page = 2;

  // const [localFilter, setLocalFilter] = useState(filter);

  console.log("data from NanniesPage >>", data);
  console.log("filter from NanniesPage >>", filter);

    useEffect(() => {
      if (!data || !data.length) {
        dispatch(fetchAllNannies(filter, page));
      }
    }, [dispatch, data, filter]);


  return (
    <Wrap>
      <Section>
        <Filter/>
        <List data={data} />
      </Section>
    </Wrap>
  );
};

export default NanniesPage;
