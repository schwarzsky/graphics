import React from 'react';

import './styles/hud.css';

import {BrowserRouter as Router, withRouter, Link} from 'react-router-dom';

const Hud = () => {
    return(
        <div className='Hud'>
          <section className='HudContainer'>
            <Link to={this.history.go}>go back</Link>
          </section>  
        </div>
    )
}

export default withRouter(Hud);