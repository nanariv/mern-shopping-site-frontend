import * as React from "react";
import { Helmet } from "react-helmet-async";
import axios from 'axios';

const Seo = () => {
  // fetch('https://finalprojectediting.glitch.me/',{
  //   mode: 'no-cors'
  // })
  const requestURL = "https://climbers-project-todo-backend.glitch.me/";

    axios.get(requestURL + "users/637bb8fc096863f0ec4d5331")
  .then((response) => {
    console.log(response.data);
  });

//   fetch(requestURL + "users/637bb8fc096863f0ec4d5331", {
//     mode: "no-cors",
//   })
//     .then(async (response) => {
//       const data = await response;

//       // check for error response
//       if (!response.ok) {
//         // get error message from body or default to response statusText
//         const error = (data && data.message) || response.statusText;
//         return Promise.reject(error);
//       }

//       console.log(data);
//     })
//     .catch((error) => {
//       console.log("There was an error!", error);
//     });
    }

export default Seo;
