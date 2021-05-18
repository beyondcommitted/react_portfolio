import React from 'react';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am Breon
                    <span> a Software Developer.</span>
                </h1>
                <p className="h-sub-text">
                   Optimizing the whole. I love challenges and coding is certainly one of them. The feeling of gratification and overwhelming pride when you achieve a desired outcome is preeminent. I am determined to solve practical problems using software development. 
                </p>
                <div className="icons">
                    <Link className='icon-holder'>
                    <FontAwesomeIcon icon={faGithub} className='icon' />
                    </Link>
                    <Link className='icon-holder' href='https://www.linkedin.com/in/breon-sparrow-31bb24205/'alt='LinkedIn' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} className='icon' />
                    </Link>
                    <Link className='icon-holder'>
                    <FontAwesomeIcon icon={faInstagram} className='icon' />
                    </Link>
                    <Link className='icon-holder'>
                    <FontAwesomeIcon icon={faFacebook} className='icon' />
                    </Link>
                </div>
            </header>
        </div>
    )
}

