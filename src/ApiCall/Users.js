import axios from "axios";

export const getUsers = async ()=>{
    // const URL = 'https://jsonplaceholder.typicode.com/users'
    const URL = "https://jsonplaceholder.typicode.com/posts";

    const response = await  axios.get(URL);
    console.log('response...???',response);

    return response;
};
