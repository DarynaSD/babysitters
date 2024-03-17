import { fetchNannies } from "../firebase/fetchNannies";


const NanniesPage = () => {

    const data = fetchNannies();
    console.log(data)
  return (
    <section>
      <div>im NanniesPage</div>
    </section>
  );
};

export default NanniesPage;
