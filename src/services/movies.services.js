import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'http://localhost:8080/api';

export const incrementViewCount = async (movieId) => {
  await axios
    .post(`${baseUrl}/increment-view-count?id=${movieId}`)
    .then((response) => {
      if (response.status === 200) {
        console.log("Success!");
      } else {
        console.log("Error");
      }
    })
    .catch((error) => {
      console.error('Sign up form: There was an error!', error);
    });
}