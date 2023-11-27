import { useState } from "react";
import { postCategory } from "../../../services/api/requests/categoryRequests";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  let [newCategory, setNewCategory] = useState({ name: "", description: "" });
  let navigate = useNavigate();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await postCategory(newCategory);
        navigate("/category");
        setNewCategory({ name: "", description: "" });
      }}
    >
      <input
        onChange={(e) => {
          setNewCategory({ ...newCategory, name: e.target.value });
        }}
        value={newCategory.name}
        placeholder="enter name"
        type="text"
      />
      <input
        onChange={(e) => {
          setNewCategory({ ...newCategory, description: e.target.value });
        }}
        value={newCategory.description}
        placeholder="enter description"
        type="text"
      />
      <button type="submit">add</button>
    </form>
  );
};

export default AddCategory;
