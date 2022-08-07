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
  const username = formValues.username;
  const password = formValues.password;

  await axios
    .post(`${baseUrl}/register?username=${username}&password=${password}`)
    .then((response) => {
      if (response.status === 200) {
        if (!response.data) {
          alert('Username already exists. Please choose another one.');
        } else {
          console.log("Success!");
          navigate('/register/contact', { state: { username: username } });
        }
      } else {
        console.log("Error");
      }
    })
    .catch((error) => {
      console.error('Sign up form: There was an error!', error);
    });
};


export const addContact = async (formValues, navigate, username) => {
  const email = formValues.email;
  const firstname = formValues.firstName;
  const lastname = formValues.lastName;
  const phone_number = formValues.phoneNumber;

  await axios
    .post(`${baseUrl}/add-contact?username=${username}&email=${email}&firstName=${firstname}&lastName=${lastname}&phoneNumber=${phone_number}`)
    .then((response) => {
      if (response.status === 200) {
        console.log("Contact added to existing user!");
        navigate('/register/address', { state: { username: username } });
      } else {
        console.log("Error");
      }
    })
    .catch((error) => {
      console.error('Contact form: There was an error!', error);
    });
}

export const addAddress = async (formValues, navigate, username) => {
  const country = formValues.country;
  const area = formValues.area;
  const city = formValues.city;
  const street = formValues.street;
  const number = formValues.number;

  await axios
    .post(`${baseUrl}/add-address?username=${username}&country=${country}&area=${area}&city=${city}&street=${street}&number=${number}`)
    .then((response) => {
      if (response.status === 200) {
        console.log("Address added to existing user contact!");
        navigate('/register/role', { state: { username: username } });
      } else {
        console.log("Error");
      }
    })
    .catch((error) => {
      console.error('Address form: There was an error!', error);
    });
}

export const addRole = async (roleName, navigate, username) => {
  const role = roleName;

  await axios
    .post(`${baseUrl}/add-role?username=${username}&role=${role}`)
    .then((response) => {
      if (response.status === 200) {
        console.log("Role added to existing user!");
        navigate('/login');
      } else {
        console.log("Error");
      }
    })
    .catch((error) => {
      console.error('Subscription form: There was an error!', error);
    });
}