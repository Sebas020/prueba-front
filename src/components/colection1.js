import React from "react";
import picture from "./../images/picture.jpg";

const Colection1 = () => {
    return (
        <div className="row slide1">
            <figure class="figure col-2">
                <img src={picture} className="figure-img img-fluid" />
                <figcaption class="figure-caption text-center">Silla de ruedas.</figcaption>
            </figure>
            <figure class="figure col-2">
                <img src={picture} className="figure-img img-fluid" />
                <figcaption class="figure-caption text-center">Silla de ruedas.</figcaption>
            </figure>
            <figure class="figure col-2">
                <img src={picture} className="figure-img img-fluid" />
                <figcaption class="figure-caption text-center">Silla de ruedas.</figcaption>
            </figure>
            <figure class="figure col-2">
                <img src={picture} className="figure-img img-fluid" />
                <figcaption class="figure-caption text-center">Silla de ruedas.</figcaption>
            </figure>
            <figure class="figure col-2">
                <img src={picture} className="figure-img img-fluid" />
                <figcaption class="figure-caption text-center">Silla de ruedas.</figcaption>
            </figure>
        </div>
    );
};

export default Colection1;
