import React, {useEffect} from 'react'
import SkillsTable from '../components/SkillsTable'
import Navbar from '../components/Navbar'

const Skills = () =>{

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])

    return(
        <div>
            <Navbar
            background='#002941'
            />
            <SkillsTable/>
        </div>
    )
}

export default Skills;
