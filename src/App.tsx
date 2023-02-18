import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './App.css';
import { useAddPerson, usePeopleData } from './hook/usePeopleData';
import { Person } from './type';

function App() {
  // using tool from react-hook-form to persist data from form
  const { register, handleSubmit } = useForm<Person>();

  // using the hook to fetch people
  const { data: people } = usePeopleData()

  // using the hook to add person
  const {mutate} = useAddPerson()

  // submitting the form going through all form data
  const submitForm: SubmitHandler<Person> = (data:Person) => {
    const person = {
      ...data
    };
    //Javascript function to reload the page and get the new row
    window.location.reload();
    mutate(person)
  };
  

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping all people from database */}
            {people?.map((person:Person, index:number) => {
              return (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.lastName}</td>
                  <td>{person.country}</td>
                </tr>
               )
            })}
        </tbody>
      </table>
      <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <label>First Name</label>
        <input type="text" placeholder="Your name.." {...register("name")} />

        <label>Last Name</label>
        <input type="text" placeholder="Your last name.." {...register("lastName")}/>

        <label>Country</label>
        <select {...register("country")}>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      
        <input type="submit" value="Submit"/>
      </form>
      </div>
    </div>
  );
}

export default App;
