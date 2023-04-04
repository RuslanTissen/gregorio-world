import "./Quality.scss"
import { SlDiamond } from "react-icons/sl"
import { MdAddchart } from "react-icons/md"
import { GiTwoCoins } from "react-icons/gi"
import { RiSecurePaymentLine } from "react-icons/ri"

export default function Quality() {
	return (
		<div className="quality">
			<div className="quality-guarantee">
				<SlDiamond />
				<h1>100%</h1>
				<p>Garantía de calidad y la seguridad de su propiedad en el contrato.</p>
			</div>

			<div className="quality-top">
				<MdAddchart />
				<h1>TOP-1</h1>
				<p>En el ranking de "Top 10 Empresas de Limpieza en Buenos Aires por Encuestas".</p>
			</div>

			<div className="quality-price">
				<GiTwoCoins />
				<h1>Precio</h1>
				<p>En el ranking de "Top 10 Empresas de Limpieza en Buenos Aires por Encuestas".</p>
			</div>

			<div className="quality-payment">
				<RiSecurePaymentLine />
				<h1>Pago</h1>
				<p>Para el resultado después de la limpieza, de cualquier manera conveniente. Sin prepago.</p>
			</div>
		</div>
	)
}
