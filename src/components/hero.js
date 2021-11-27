import React from "react";
import logo from "./../images/logo.png";

const Hero = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                <form class="d-flex col-6">
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />

                    <button class="btn btn-outline-success" type="submit">
                        🔎
                    </button>
                </form>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Mis Pedidos
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                               <u>Ingresa</u>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                🛒Carrito
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Ver
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Pagar
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Hero;
