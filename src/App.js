import "./App.css";
import Hero from "./components/hero";
import Jumbotron from "./components/jumbotron";
import Colection1 from "./components/colection1";
import Footer from "./components/footer";
import Colection2 from "./components/colection2";
import Section2 from "./components/section2";
import Section1 from "./components/section1";
import background from "./images/jumbotron.jpg";
import Nav from "./components/nav";

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="row-fluid">
        <div className="col-12">
          <Hero />
          <Nav></Nav>
        </div>
        <div className="col-12">
          <Jumbotron />
        </div>
        <div className="col-12">
          <Colection1 />
        </div>
        <div className="col-12 p-5">
          <p className="text-center pb-3" style={{ color: '#125ecf', fontWeight: 'bold', fontSize: '25px' }}>NUEVA COLECCIÓN</p>
          <Colection2 />
        </div>
        <div className="col-12 p-5">
          <Section1 />
        </div>



        <div className="col-12">
          <ul class="nav nav-tabs justify-content-center">

            <li class="nav-item">
              <a class="nav-link active" href="#">Sillas de ruedas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Terapia en el hogar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Movilidad</a>
            </li>
          </ul>
        </div>
        <div className="col-12 p-5" style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 50%',
          backgroundPosition: 'top',

        }}>

          <p className="text-center pt-5 pb-4" style={{ color: '#fff', fontWeight: 'bold', fontSize: '25px' }}>SILLAS DE RUEDAS</p>
          <Colection2 />

        </div>
        <div className="col-12">
          <div className='row px-5'>
            <div className="col-6"><Section2 titulo='Empresas en crecimiento' /></div>
            <div className="col-6"><Section2 titulo='Complemento línea de oximetría' /></div>
          </div>

        </div>
        <div className="col-12 p-5">
          <p className="text-center pb-3" style={{ color: '#125ecf', fontWeight: 'bold', fontSize: '25px' }}>AYUDAS PARA LA MARCHA</p>
          <Colection2 />
        </div>
        <div className="col-12 p-5">
          <p className="text-center pb-3" style={{ color: '#125ecf', fontWeight: 'bold', fontSize: '25px' }}>TERAPIAS RESPIRATORIAS</p>
          <Colection2 />
        </div>
        <div className="col-12">
          <div id="div-totop" class="cmn-divfloat">



            <div class="nav-item dropdown">
              <a
                class="btn btn-success dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >〽️ Ayuda
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item active" href="#">
                  ☏ Llamanos
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  ✆ Comunicate por whatsapp
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  💬 Chatea con nosotros
                  </a>
                </li>
                </ul>
            </div>




          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
