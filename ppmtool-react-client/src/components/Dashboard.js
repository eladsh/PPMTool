import React, { Component } from 'react'
import ProjectItem from './project/ProjectItem'

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
            <h1>
                Welcome to the Dashboard  
            </h1>
                <ProjectItem />
                </div>
        )
    }
}


export default Dashboard