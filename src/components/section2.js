import React from "react";
import picture from "./../images/banner2.jpg";

const Section2 = (props) => {
    return (
        <div class="col-12 p-5" style={{
            backgroundImage: `url(${picture})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            backgroundPosition: 'center',
            borderRadius:'10px',
            height: '400px'

        }}>
            <p class="display-3" style ={{color: '#eee', fontWeight: 'bold'}}>{props.titulo}
            </p>
            <a class="btn btn-warning" href="#" role="button">Ver productos</a>

        </div>
        
    );
};

export default Section2;
