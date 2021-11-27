import React from "react";
import FooterImg from "./../images/pays.png";
import FooterImg2 from "./../images/partners.png";

const Footer = () => {
    return (
        <div className='row footer px-5' >
            <div className="col-3">
                <h6>Sobre Nosotros</h6>
                <ul>
                    <li>¿Quienes somos?</li>
                    <li>Nuestra historia?</li>
                    <li>Nuestra información</li>
                </ul>
            </div>
            <div className="col-3">
                <h6>Categorias destacadas</h6>
                <ul>
                    <li>Profesionales de la salud</li>
                    <li>Protección e higiene</li>
                    <li>Control y prevención</li>
                    <li>Movilidad</li>
                    <li>Independencia y cuidado en el hogar</li>
                    <li>Terapia respiratoria</li>
                    <li>Confort</li>
                </ul>
            </div>
            <div className="col-3">
                <h6>Servicio al cliente</h6>
                <ul>
                    <li>Politica de entregas</li>
                    <li>Politica de devoluciones</li>
                    <li>Politica de garantias</li>
                    <li>Politica de cancelación</li>
                    <li>Whatsapp 123 123 3434</li>
                    <li>PBX 018000 123 345</li>
                    <li>e-Mail: info@impormedical.com</li>
                </ul>
            </div>
            <div className="col-3">
                <h6>Suscribete a nuestro Newsletter</h6>
                <form class="d-flex row">
                    <div className="col-12">
                        <input type="text" className='form-control' />
                    </div>

                    <div class="form-check col-12">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Terminos y condiciones
                        </label>
                    </div>
                </form>
                <span>Nuestros métodos de pago</span>
                <img src={FooterImg} className="figure-img img-fluid" style= {{paddingTop: '20px'}} />

            </div>
            <div className="col-12">
                <hr />
            </div>
            <div className="col-12" align='center'>
                <img src={FooterImg2} className="figure-img img-fluid" />
            </div>
        </div>
    );
};

export default Footer;
