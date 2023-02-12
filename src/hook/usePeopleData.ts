import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { Person } from "../type"

const BASE_URL = 'http://localhost:3000'

//Fetch people with Axios
export const fetchPeople = async() => {
    try {
      const response = await axios.get(`${BASE_URL}/people`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

//Fetch people without Axios
export const fetchPeople = async() => {
    try {
        const response = await fetch(`${BASE_URL}/people`)
        const json = await response.json()
        return json;
    } catch (error) {
        console.log(error)
    }
}

//Get People with React-Query
export const usePeopleData = () => {
    return useQuery('people', fetchPeople)
}

//Post person with Axios
export const addPerson = async (person:Person) => {
    return axios.post(`${BASE_URL}/people`,person)
}

//Post person without Axios
export const addPerson = async (person:Person) => {
    const Options = {
        method:'POST',
        headers: {'Content-type':"application/json"},
        body:JSON.stringify(person)
    }
    const response = await fetch(`${BASE_URL}/people`, Options)
    const json = await response.json()

    return json;
}

//Post person with React-Query
export const useAddPerson = () => {
    return useMutation(addPerson)
}

