import React from 'react'
import Grid from '@material-ui/core/Grid';
import Pdf from '../../assets/resume.pdf'
import "./contact.css"


const Contact = () => {
    return (
        <div className='contact-section'>

                <Grid item xs={12}>
                    <a href="mailto:loganwbertrand@gmail.com" target="_blank" rel="noopener noreferrer">
                        <div className="circle"><i className="fas fa-3x fa-envelope"></i></div>
                    </a>
                    <h1 className='title'>Email</h1>
                </Grid>

                <Grid item xs={12}>
                    <a href={Pdf} target="_blank" rel="noopener noreferrer">
                        <div className="circle"><i className="fas fa-3x fa-file-alt"></i></div>
                    </a>
                    <h1 className='title'>Resume</h1>
                </Grid>

                <Grid item xs={12}>
                    <a href="#">
                        <div className="circle"><i className="fas fa-3x fa-mobile-alt"></i></div>
                    </a>
                    <h1 className='title'>(760) 822-1629</h1>
                </Grid>

                <Grid item xs={12}>
                    <a href="https://www.linkedin.com/in/logan-bertrand-/" target="_blank" rel="noopener noreferrer">
                        <div className="circle"><i className="fab fa-3x fa-linkedin"></i></div>
                    </a>
                    <h1 className='title'>LinkedIn</h1>
                </Grid>

                <Grid item xs={12}>
                    <a href="https://github.com/loganbertrand" target="_blank" rel="noopener noreferrer">
                        <div className="circle"><i className="fab fa-3x fa-github"></i></div>
                    </a>
                    <h1 className='title'>GitHub</h1>
                </Grid>

        </div>
    )
}

export default Contact;
