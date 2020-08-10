import React from 'react';

import {Link} from 'react-router-dom';

import './styles/main.css';

const Main = () => {
    return(
        <div className='Container'>
            <section className='Pages'>
                <Link to={'/spinning'}>Glowing</Link>
            </section>
            <section className='Sign'>
                made by schwarzsky, published at <a href='https://github.com/schwarzsky/graphics'>github</a>
            </section>
        </div>
    )
}

export default Main;