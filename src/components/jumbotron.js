import React from "react";
import background from "./../images/jumbotron.jpg";

const Jumbotron = () => {
    return (
        <div class="jumbotron p-5" style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            backgroundPosition: 'center'
  
        }}>
            <div className="p-0 p-sm-5">
                <h1 class="display-5 col-12 col-sm-4 offset-sm-8" style={{ whiteSpace: "pre-wrap", fontWeight: '600', color:'#444' }}>Más de 800 mil familas habilitadas <br />

                <a class="btn btn-primary" href="#" role="button">Ver productos</a>
                </h1>
            </div>

        </div>
    );
};

export default Jumbotron;
