import React from "react"
import './Picture.scss'
import home from "../../images/photo-1.png"

export default function Pictuer() {
	return (
		<div id="foto" className="picture">
			<div className="picture-container">
				<img src={home} alt="baner" className="onscroll-image-fade-in"/>
			</div>
			<div className="moto">
				<h1><mark>Limpieza</mark> integral diaria.</h1>
				<h1>Eco-limpieza de <mark>oficinas</mark>.</h1>
				<h1>Limpieza de oficinas después de la renovación.</h1>
				<h1>Limpieza <mark>desinfectante</mark>  de oficinas.</h1>
			</div>
		</div>
	)
}