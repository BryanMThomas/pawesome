import axios from "axios";

const getAllDogs = () => {
  return axios.get(
    "https://3z5e98v1ql.execute-api.us-west-2.amazonaws.com/default/getDogs"
  );
};

export default getAllDogs;
