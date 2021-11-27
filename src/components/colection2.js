import React from "react";
import Item from "./item";
import ItemPic from "./../images/silla.png";

const Colection2 = () => {
    return (
        <div className="row">
            <div className="col-3">
                <Item
                    nombre="Silla de Ruedas Motorizada gris metalizada avatible M2000"
                    precio="5000"
                    url={ItemPic} />
            </div>
            <div className="col-3">
                <Item
                    nombre="Silla de Ruedas Motorizada gris metalizada avatible M2000"
                    precio="5000"
                    url={ItemPic} />
            </div>
            <div className="col-3">
                <Item
                    nombre="Silla de Ruedas Motorizada gris metalizada avatible M2000"
                    precio="5000"
                    url={ItemPic} />
            </div>
            <div className="col-3">
                <Item
                    nombre="Silla de Ruedas Motorizada gris metalizada avatible M2000"
                    precio="5000"
                    url={ItemPic} />
            </div>
        </div>
    );
};

export default Colection2;
