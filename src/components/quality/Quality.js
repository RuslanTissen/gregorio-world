import "./Quality.scss"
import { SlDiamond } from "react-icons/sl"
import { MdAddchart } from "react-icons/md"
import { GiTwoCoins } from "react-icons/gi"
import { RiSecurePaymentLine } from "react-icons/ri"
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import { BsArrowDownCircleFill } from "react-icons/bs"

export default function Quality() {
	return (
		<div className="quality" id="quality">
			<div className="quality-left">
				<div className="quality-guarantee quality-box">
					<SlDiamond />
					<h1>100%</h1>
					<p>Garantía de calidad y la seguridad de su propiedad en el contrato.</p>
				</div>

				<div className="quality-top quality-box">
					<MdAddchart />
					<h1>TOP-1</h1>
					<p>En el ranking de "Top 10 Empresas de Limpieza en Buenos Aires por Encuestas".</p>
				</div>
			</div>

			<div className="quality-right">
				<div className="quality-price quality-box">
					<GiTwoCoins />
					<h1>Precio</h1>
					<p>En el ranking de "Top 10 Empresas de Limpieza en Buenos Aires por Encuestas".</p>
				</div>

				<div className="quality-payment quality-box">
					<RiSecurePaymentLine />
					<h1>Pago</h1>
					<p>Para el resultado después de la limpieza, de cualquier manera conveniente. Sin prepago.</p>
					<div className="button-container">
						<AnchorLink href="#images"><BsArrowDownCircleFill /></AnchorLink>
					</div>
				</div>
			</div>

		</div>
	)
}
