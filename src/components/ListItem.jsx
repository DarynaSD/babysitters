/* eslint-disable react/prop-types */
const ListItem = ({one}) => {
  const { name, education, experience, } = one;

//   const like = isLiked ? "liked" : "";

  return (
    <li>
      <div>{name}</div>
      <div>{education}</div>
      <div>{experience}</div>
    </li>
  );
};

export default ListItem;
