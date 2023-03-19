import './App.scss';
import Header from './components/header/Header.jsx';
import MidSection from './components/midle/Mid-section';
import Pictuer from './components/section-picture/Picture';
import Footer from './components/footer/Footer';
import photo2 from "./images/photo-2.png"
import photo3 from "./images/photo-3.png"
import photo4 from "./images/photo-4.png"
import personal from "./images/personal.png"
// import wa from "./images/WhatsAppButtonGreenMedium.png"
import { BsWhatsapp } from "react-icons/bs"


function App() {
	// const about = document.getElementsByClassName('')

	return (
		<div className="app">
			<Header />
			<Pictuer />
			<div id={'alq'} >
				<MidSection
					image={photo2}
					// title={"Nuestro lema:"}
					text={"Nuestro personal tiene muchos años de experiencia. Y seguimos mejorando tanto los métodos de limpieza como los medios para mejorar el servicio."}
				/>
			</div>
			<div id={'detalles'} >
				<MidSection
					image={photo3}
					// title={"Open Time"}
					text={"Utilizamos solo herramientas y equipos profesionales. Productos a partir de materias primas naturales. No causa alergias, seguro para niños y animales."} />
			</div>
			<div id={'contacto'}>
				<MidSection
					image={photo4}
					price={"¿Quieres calcular el costo?"}
					a={<a className='btn' href='mailto:rthyssen73@gmail.com'>Contáctame</a> }
					// a={<a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/5491166014163"><BsWhatsapp style={{ margin: "5px 0", width: "2em", height: "2em", color: "rgb(0,168,132)" }} /> </a>} 
					/>
			</div>
			<div id={"personal"}>
				<MidSection
					image={personal}
					price={"¿En busca de un trabajo?"}
					a={<a className='btn' href='mailto:rthyssen73@gmail.com'>Contáctame</a> }
					/>
			</div>

			<Footer />
		</div>
	);
}

export default App;
