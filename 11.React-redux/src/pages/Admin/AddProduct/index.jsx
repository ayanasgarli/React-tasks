import { useFormik } from "formik"
import { Input, Button } from 'antd';
import { addProductSchema } from "../../../validation/addProductSchema";
import { addProducts } from "../../../services/api/productRequests";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { adddata } from "../../../services/redux/slices/dataSlice";
import { useEffect } from "react";

function AddProduct() {
  let user= useSelector(state=>state.user.user)
  let navigate=useNavigate()
  useEffect(()=>{
    if(!user.isAdmin){
      navigate("/admin")
    }
  },[user])
    let dispatch = useDispatch()
    let formik = useFormik({
        initialValues:{
            name:"",
            price:""
        },
        onSubmit: (values,actions) => {
            addProducts(values)
            .then(res=>{
              dispatch(adddata(res))
            })
            actions.resetForm()
            navigate("/admin")
          },
          validationSchema: addProductSchema,
    })
  return (
    <>
    <form onSubmit={formik.handleSubmit}>
        <Input style={{width:"20%",margin:"5px 10px"}} name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} placeholder="name" /><br/>
        {formik.errors.name && formik.touched.name && <div style={{color:"red",margin:"0 10px"}}>{formik.errors.name}</div> }<br/>
        <Input style={{width:"20%",margin:"5px 10px"}} name="price" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.price} placeholder="price" type="number" /><br/>
        {formik.errors.price && formik.touched.price && <div style={{color:"red",margin:"0 10px"}}>{formik.errors.price}</div> }<br/>
        <Button style={{margin:"5px 10px"}} htmlType="submit" type="primary">Add</Button>
    </form>
    </>
  )
}

export default AddProduct