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
				<h1>Bienvenido al mundo de la  <mark>pureza</mark> </h1>
				{/* <h1><mark></mark></h1>
				<h1></h1>
				<h1> <mark></mark>  </h1> */}
			</div>
		</div>
	)
}