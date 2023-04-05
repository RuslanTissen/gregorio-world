import './App.scss';
import Header from './components/header/Header.jsx';
import MidSection from './components/midle/Mid-section';
import Pictuer from './components/section-picture/Picture';
import Expo from './components/expo/Expo';
import Quality from './components/quality/Quality.js';
import Footer from './components/footer/Footer';
import photo3 from "./images/photo-3.png"
import personal from "./images/personal.png"
import { RiH1 } from 'react-icons/ri';

function App() {
	// const about = document.getElementsByClassName('')

	return (
		<div className="app">
			<Header />
			<div className='app-container'>
				<Pictuer />

				<Quality />

				<Expo />

				<div id={'contacto'}>
					<MidSection
						title={<h3>We provide a full range of services according to your goals and budget</h3>}
						text={<p>We are not called in just to mop the floor and wipe the windows. We do a full cleaning that lasts 5-8 hours to clean everything to a shine</p>}
						image={photo3}
						price={<div style={{ margin: "30px" }}>¿Quieres calcular el costo?</div>}
						a={<a className='btn' href='mailto:rthyssen73@gmail.com'>Contáctame</a>}
					// a={<a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/5491166014163"><BsWhatsapp style={{ margin: "5px 0", width: "2em", height: "2em", color: "rgb(0,168,132)" }} /> </a>} 
					/>
				</div>

				<div id={"personal"}>
					<MidSection
						title={<h3>Regular training and quality control</h3>}
						text={<p>We will protect you from the finishing touches that happen during work							with unreliable cleaning companies.</p>}
						image={personal}
						price={<div style={{ margin: "30px" }}>¿En busca de un trabajo?</div>}
						a={<a className='btn' href='mailto:rthyssen73@gmail.com'>Contáctame</a>}
					/>
				</div>

			</div>
			<Footer />
		</div>
	);
}

export default App;




{/* <div id={'alq'} >
					<MidSection
						image={photo2}
						// title={"Nuestro lema:"}
						text={<div style={{ margin: "25px 0" }}>Nuestro personal tiene muchos años de experiencia. Y seguimos mejorando tanto los métodos de limpieza como los medios para mejorar el servicio."</div>}
					/>
				</div> */}
{/* <div id={'detalles'} >
					<MidSection
						image={photo3}
						// title={"Open Time"}
						text={<div style={{ margin: "25px 0" }}>Utilizamos solo herramientas y equipos profesionales. Productos a partir de materias primas naturales. No causa alergias, seguro para niños y animales.</div>}
					/>
				</div> */}