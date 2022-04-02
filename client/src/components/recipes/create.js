import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {

 const [form, setForm] = useState({
   name: ""
 });

 const navigate = useNavigate();
 
 // This method will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, add a new record to the database.
   const recipe = { ...form };
  console.log(JSON.stringify(recipe))
   await fetch("/recipes", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({recipe}),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: ""});
   navigate("/recipes");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create Recipe</h3>
     <form onSubmit={onSubmit}>
      <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="input"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
      
       <div className="form-group">
         <input
           type="submit"
           id="create-recipe"
           value="Create Recipe"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}
