import React from "react"
import './Mid-section.scss'

function MidSection(props) {
	let { price, title, text, image, a } = props

	return (
		<div className="section">
			<div className="title">{title} </div>
			<div className="text">{text}</div>


			<div className="picture-text-container">
				<div className="picture-container">
					<img className="img" src={image} alt="image" />
				</div>

				<div className="section-text">
					<div className="price">{price}</div>
					<div className="email">{a}</div>

					{/* <a className="whatsapp">{a}</a> */}
				</div>
			</div>


		</div>
	)
}

export default MidSection