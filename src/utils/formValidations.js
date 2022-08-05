export const signUpFormValidation = (setFormErrors, name, value) => {
  setFormErrors((prev) => {
    const errorStateObj = { ...prev, [name]: '' };

    switch (name) {
      case 'password':
        if (value.length < 8) {
          errorStateObj[name] =
            'Password must consist of at least 8 characters';
        }
        break;

      default:
        break;
    }

    return errorStateObj;
  });
};

export const loginFormValidation = (setFormErrors, name, value) => {
  setFormErrors((prev) => {
    const stateObj = { ...prev, [name]: '' };

    switch (name) {
      case 'password':
        if (value.length < 8) {
          stateObj[name] = 'Password must consist of at least 8 characters.';
        }
        break;

      default:
        break;
    }

    return stateObj;
  });
};
