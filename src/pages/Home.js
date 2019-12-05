import React, {useEffect} from 'react'
import Landing from '../components/Landing'
import About from '../components/About'
import Description from '../components/Description'


const Home = () =>{

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])

    return(
        <div>
            <Landing/>
            <Description/>
            <About/>
        </div>
    )
}

export default Home;
