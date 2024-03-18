/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import ListItem from "./ListItem";

const List = ({data}) => {

    console.log("data in list  >>", data);

  return (
    <ul>
      {data.map((one) => (
        <ListItem one={one} key={nanoid()} />
      ))}
    </ul>
  );
};

export default List;