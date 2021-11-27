import React from "react";
import picture from "./../images/banner2.jpg";
import picture2 from "./../images/doctor.jpg";

const Section1 = (props) => {
    return (
        <div className="row" align='center'>
            <div className="col-8 section1">
                <div className="row">
                    <div className="col-7 m-1 pt-3" style={{
                        backgroundImage: ` linear-gradient(
                            rgba(0, 0, 0, 0.5),
                            rgba(0, 0, 0, 0.5)
                          ), url(${picture})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center',
                        borderRadius: '10px',
                        height: '150px',

                    }}>
                        <p className="titulo">¿Porque elegirnos?
                        </p>
                        <a className="btn btn-warning" href="#" role="button">Conoce más de nosotros</a>

                    </div>
                    <div className="col-4 m-1" style={{
                        backgroundImage: ` linear-gradient(
                            rgba(0, 0, 0, 0.5),
                            rgba(0, 0, 0, 0.5)
                          ), url(${picture})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center',
                        borderRadius: '10px',
                        alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'

                    }}>
                        <p className="titulo">Tienda surtida
                        </p>

                    </div>
                </div>
                <div className='row'>
                    <div className="col-4 m-1" style={{
                        backgroundImage: ` linear-gradient(
                            rgba(0, 0, 0, 0.5),
                            rgba(0, 0, 0, 0.5)
                          ), url(${picture})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center',
                        borderRadius: '10px',
                        height: '150px',
                        alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'

                    }}>
                        <p className="titulo">Usuario interesado
                        </p>

                    </div>
                    <div className="col-7 m-1" style={{
                        backgroundImage: ` linear-gradient(
                            rgba(0, 0, 0, 0.5),
                            rgba(0, 0, 0, 0.5)
                          ), url(${picture})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center',
                        borderRadius: '10px',
                        alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'

                    }}>
                        <p className="titulo">Servicio integral
                        </p>

                    </div>
                </div>
            </div>
            <div className="col-4 p-0 m-0" style={{
                backgroundImage: ` linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(${picture2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% auto',
                backgroundPosition: 'center',
                borderRadius: '10px',
                height: '310px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'

            }}>
                <p className="titulo text-white" style={{ fontWeight: '400', fontSize: '30px' }}>Gente informada
                </p>
            </div>
        </div>



    );
};

export default Section1;
