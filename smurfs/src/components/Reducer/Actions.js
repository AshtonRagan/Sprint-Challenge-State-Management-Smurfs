import Axios from "axios";

export const GETTING_DATA = "GETTING_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILED = "DATA_FAILED";
export const POST_SUCCESS = "POST_SUCCESS";

export const FetchData = () => dispatch => {
  dispatch({ type: GETTING_DATA });
  Axios.get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DATA_FAILED });
    });
};

export const SendData = data => dispatch => {
  Axios.post("http://localhost:3333/smurfs", data).then(res => {
    dispatch({ type: POST_SUCCESS, payload: res });
    console.log(".then in Post", res);
  });
};
