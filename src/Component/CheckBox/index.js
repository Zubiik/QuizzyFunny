import mockQuizz from '../MockQuizz';

import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
   <div>
     {mockQuizz.map((question,index) => {
       console.log(question);
       return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="checkbox" id={index} name="questions" value={index}{...register("example")} />
        <label for={index}>{question}</label>      
       
      </form>
       )
     })}
    <input type="submit" />
    </div>
  );
}

/*function CheckboxList() {


  return (
    <div >
        {mockQuizz.map((question,index) => {
            return(
                
                <form key={index}>
                <div>
                <input type="checkbox" id="questions" name="question" value="questions"/>
                <label for="questions">{question}</label>
                </div>
            </form>
            )
        })}
    </div>
  );
}

export default CheckboxList;*/
