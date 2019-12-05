import React, {useEffect} from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Navbar from '../components/Navbar'

const Projects = () =>{

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])

    return(
        <div>
            <Navbar
          background='#002941'
          />
            <ProjectContainer/>
        </div>
    )
}

export default Projects;