import { useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  let params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [id]);

  return <h1>ID : {params.id}</h1>;
};

export default ProductPage;
