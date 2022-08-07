import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'http://localhost:8080/api';

export const login = async (formValues, dispatch, navigate) => {

  console.log(formValues);
  const username = formValues.username;
  const password = formValues.password;

  await axios
    .get(`${baseUrl}/login?username=${username}&password=${password}`)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        dispatch({
          type: 'Login',
          payload: res.data,
        });
        navigate('/');
      } else {
        toast.error('Invalid username or password');
      }
    }).catch((err) => {
      toast.error('Oops! Something went wrong');
    }
    );
};

export const register = async (formValues, navigate) => {
  // await axios
  //   .put('/accounts/signup', formValues)
  //   .then((response) => {
  //     if (response.status === 200) {
  //       console.log("Success!");
  //     } else {
  //       console.log("Error");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Sign up form: There was an error!', error);
  //   });
  navigate('/login');
};
