import React from "react";

const Item = (props) => {
    return (
        <div>
            <div class="card" style={{ width: '14rem' }}>
                <img src={props.url} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p style={{ fontSize: "13px", fontWeight: '600' }}>{props.nombre}</p>
                    <p style={{ fontSize: "13px", fontWeight: '600' }}>
                        $ {props.precio}
                    </p>
                    <button className="btn btn-primary btn-block">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default Item;
