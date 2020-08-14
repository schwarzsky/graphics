import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import history from '../utils/history';

import './styles/hud.css';

const Hud = () => {
    return(
        <div className='Hud'>
          <section className='HudContainer'>
            <Link to={history.back}>go back</Link>
          </section>  
        </div>
    )
}

export default withRouter(Hud);