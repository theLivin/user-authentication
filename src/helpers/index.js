export const rules = {
  required: (v) => !!v || "Required.",
  name: (v) => (v && v.length >= 2) || "Invalid name.",
  email: (v) => /.+@.+\..+/.test(v) || "Invalid e-mail.",
  password: {
    min: (v) => v.length >= 8 || "Min 8 characters.",
  },
};

export const fieldProps = {
  outlined: true,
  required: true,
  color: "primary",
  "hide-details": true,
};

export const btnProps = {
  "x-large": true,
  depressed: true,
  class: "primary",
  rounded: true,
};
