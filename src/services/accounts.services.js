import axios from 'axios';

export const login = async (formValues, dispatch, navigate) => {
  // await axios
  //   .post('/accounts/login', formValues)
  //   .then((response) => {
  //     if (response.status === 200) {
  //       console.log("You're logged in!");

  //       dispatch({
  //         type: 'Login',
  //         payload: response.data.data,
  //       });

  //       navigate('/');
  //     } else {
  //       console.log("Error");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Login form: There was an error!', error);
  //   });
  navigate('/');
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
