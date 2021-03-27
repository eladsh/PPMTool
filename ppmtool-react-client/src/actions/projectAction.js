import axios from "axios";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS } from "./types";

export const createProject = (project, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/api/project", project);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  }
};

export const getProjects = () => async dispatch => {

  try {
    const res = await axios.get("http://localhost:8080/api/project/all");
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    })

    
  } catch (error) {
    
  }

}

export const getProject = (id, history) => async dispatch => {

  try {

    const { data } = await axios.get(`http://localhost:8080/api/project/${id}`)
    
    dispatch({
      type: GET_PROJECT,
      payload: data
    })
    
  } catch (error) {
    history.push('/dashboard')
  }

}