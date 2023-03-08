import './App.scss';
import Header from './components/header/Header.jsx';
import MidSection from './components/midle/Mid-section';
import Pictuer from './components/section-picture/Picture';
import Footer from './components/footer/Footer';
import { LoremIpsum } from 'react-lorem-ipsum';
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
					title={"Nuestro lema:"}
					text={"TEXT......"} />
			</div>
			<div id={'detalles'} >
				<MidSection
					image={photo3}
					title={"Open Time"}
					text={"...."} />
			</div>
			<div id={'contacto'}>
				<MidSection
					image={photo4}
					text={"TEXT ...."}
					a={<a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/5491145579810"><BsWhatsapp style={{margin:"5px 0", width:"2em", height:"2em", color:"rgb(0,168,132)"}}/> </a>} />
			</div>
			<div id={"personal"}>
				<MidSection
					image={personal}
					title={"Personal."}
					text={"TEXT......"} />
			</div>

			<Footer />
		</div>
	);
}

export default App;
