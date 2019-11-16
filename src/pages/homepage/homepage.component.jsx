  
import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div class="coderality">
      {/* <img class="logo" alt='pic' src='../assets/coderality.jpg' /> */}
    </div>
    <div class="photo-box">
      <div class="moving-text" >
      Where we turn Code into Reality.
      </div>
      <img class="damian" alt='pic' src='https://previews.dropbox.com/p/thumb/AAk6ygxrZo5RVNW97xarebVmy--GrSPI2YDw9FHIIausMIYBHx5CcaEuJqbEZr17hohB5-ARYF-GOiHafBYKqYzMR4mtEuVCSYDus2S6TRCmM5D0ZDMDwnZ5K8bL8AF7v0Ka2jChieGQTvo2MeSQflTEqXbTWy6zxOqMKkEuQOqbOWFlB1h0_og_U4tR5wbsG38p9_tNAPzob--aRaDX2WSetUk_slrnTh-MELEvslyQWLvIfDOxlj3krDAsuNE3WTgKNLi11FaKw4aEkpPpCl5rKvs9nuJ_e4JUFjsN5tUVmc1cjSZCcQtUIlpLmDtHGsL_6Q7WPMwyrA-0sNUdZ8JH/p.png?fv_content=true&size_mode=5' />
    
    </div>
    <Directory />
    </div>
);

export default HomePage;