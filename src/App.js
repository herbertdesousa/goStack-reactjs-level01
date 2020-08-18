import React, { useState, useEffect } from 'react';

import api from './services/api';

import Header from './components/Header'

import './App.css';

function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(res => {
            setProjects(res.data);
        })
    }, [])

    async function handleAddProject() {
        // setProjects([ ...projects, `ios ${Date.now()}` ]);

        const response = await api.post('projects', {
            title: `ios ${Date.now()}`,
            owner: "herbert"
        });

        const newProject = response.data;
        setProjects([...projects, newProject]);
    }
 

    return (
        <>
            <Header title="world" />

            <ul>
                { projects.map(project => <li key={project.id}>{project.title}</li>) }
            </ul>

            <button type="button" onClick={handleAddProject}>
                add projeto
            </button>
        </>
    )
}

export default App;
