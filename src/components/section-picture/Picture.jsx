import React from "react"
import './Picture.scss'
import home from "../../images/photo-1.png"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

export default function Pictuer() {
	return (
		<div id="foto" className="picture">
			<div className="picture-container">
				<img src={home} alt="baner" className="onscroll-image-fade-in" />
				<button className="move-button"><AnchorLink href="#images"><BsFillArrowRightCircleFill /></AnchorLink></button>
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