import {  useSelector } from "react-redux";
import { selectFav } from "../redux/selectors";
import { Section, Wrap } from "./styled/main.styled";
import List from "../components/List";
import { Empty } from "../components/styled/Empty.styled";

const FavoritesesPage = () => {

  const data = useSelector(selectFav);
  console.log("data from fav >>", data);


  return (
    <Wrap>
      <Section>
        {!data || !data.length ? (
          <Empty>
            It appears that you haven`&#39;`t added any nannies to your
            favorites yet. To get started, you can add nannies that you like to
            your favorites for easier access in the future.
          </Empty>
        ) : (
          <List data={data} isOnFavPage />
        )}
      </Section>
    </Wrap>
  );
};

export default FavoritesesPage;
