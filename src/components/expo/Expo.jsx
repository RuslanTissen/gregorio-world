import React from "react"
import './Expo.scss'
import image1 from "../../images/image-1.png"
import image2 from "../../images/image-2.png"
import image3 from "../../images/image-3.png"
import image4 from "../../images/image-4.png"
import image5 from "../../images/image-5.png"

function Expo() {
	return (
		<div className="exercise">
			<div className="exercise-text">
				<div className="text-container">
					<h3>Obtener una gama completa de servicios </h3>
					<p>Deje que el trabajo de nuestros empleados hable por sí mismo, deje sus comentarios para que podamos mejorar nuestro servicio.</p>
				</div>
				<div className="link-container">
					<a href='mailto:rthyssen73@gmail.com' className="btn">Dejar un comentario</a>
				</div>
			</div>

			<div className="exercise-button">

			</div>

			<div className="exercise-images">
				<div className="exercise-images-big">
					<img src={image1} alt="image-1" />
				</div>
				<div className="exercise-images-small">
					<div className="box1">
						<img src={image2} alt="" className="image-2" />
						<img src={image3} alt="" className="image-3" />
					</div>
					<div className="box2">
						<img src={image4} alt="" className="image-4" />
						<img src={image5} alt="" className="image-5" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Expo