/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import ListItem from "./ListItem";
import { Ul } from "./styled/Ul.styled";

const List = ({data}) => {

    // console.log("data in list  >>", data);

  return (
    <Ul>
      {data.map((one) => (
        <ListItem one={one} key={nanoid()} />
      ))}
    </Ul>
  );
};

export default List;