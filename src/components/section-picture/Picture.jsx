import React from "react"
import './Picture.scss'
import home from "../../images/photo-1.png"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import { BsArrowDownCircleFill, BsArrowDownCircle } from "react-icons/bs"

export default function Pictuer() {
	return (
		<div id="foto" className="picture">

			<div className="picture-container">
				<img src={home} alt="baner" />
			</div>

			<div className="moto">
				<div className="text-container">
					<h1>Bienvenido al mundo de la  <mark>pureza</mark> </h1>
				</div>
				<div className="button-container">
					<AnchorLink href="#images"><BsArrowDownCircleFill /></AnchorLink>
				</div>

			</div>
		</div>
	)
}