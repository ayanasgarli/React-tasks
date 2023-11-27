import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryByID } from "../../../services/api/requests/categoryRequests";

const CategoryDetail = () => {
  const { id } = useParams();
  let [category, setCategory] = useState({});
  useEffect(() => {
    getCategoryByID(id).then((resp) => {
      setCategory(resp);
    });
  }, [id]);

  return (
    <>
      <h2>Details</h2>
      <h4>ID: {category.id}</h4>
      <h4>Name: {category.name}</h4>
      <h4>Description: {category.description}</h4>
    </>
  );
};

export default CategoryDetail;
