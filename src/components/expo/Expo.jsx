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
				<h4>recovery sport</h4>
				<p>Rehabilitation sports serve both young and old to restore health. Be it back pain, shoulder problems, hip problems, post surgery, accident/injury, etc.</p>
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