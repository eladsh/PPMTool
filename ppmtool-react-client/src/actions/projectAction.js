import axios from "axios";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS, DELETE_PROJECT } from "./types";

export const createProject = (project, history) => async dispatch => {
  try {
    const res = await axios.post("/api/project", project);
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
    const res = await axios.get("/api/project/all");
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    })

    
  } catch (error) {
    
  }

}

export const getProject = (id, history) => async dispatch => {


  try {

    const { data } = await axios.get(`/api/project/${id}`)
    
    dispatch({
      type: GET_PROJECT,
      payload: data
    })
    
  } catch (error) {
    history.push('/dashboard')
  }

}

export const deleteProject = (id) => async dispatch => {

  if (window.confirm('Are you sure? This will delete the entire project, Includ it\'s tasks')) {
    try {
      await axios.delete(`/api/project/${id}`)
     dispatch({
       type: DELETE_PROJECT,
       payload: id
     })
   } catch (error) {
     
   }
  }



}