import React, { useState } from 'react'
import './Header.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import { AiOutlineHome } from 'react-icons/ai'

function Header() {
	const [show, setShow] = useState(false)

	return (
		<div className="nav">
			<ul className='ul-first'>
				<AnchorLink href="#foto" className="logo" style={{fontSize:"1.5em"}}><AiOutlineHome /></AnchorLink>
				<li className="alq"><AnchorLink href="#foto">MEDIO</AnchorLink> </li>
				<li className="detalles"><AnchorLink href="#images">RESULTADO</AnchorLink></li>
				<li className="contacto"><AnchorLink href="#contacto">CONTACTO</AnchorLink></li>
				<li className='personal'><AnchorLink href="#personal">VACANTES</AnchorLink></li>
				<GiHamburgerMenu style={{ fontSize: "1.5em" }} onClick={() => setShow(!show)} />
			</ul >
			{show && <ul className='ul-second'>
				<li className="alq"><AnchorLink href="#foto">MEDIO</AnchorLink> </li>
				<li className="detalles"><AnchorLink href="#images">RESULTADO</AnchorLink></li>
				<li className="contacto"><AnchorLink href="#contacto">CONTACTO</AnchorLink></li>
				<li className="personal"><AnchorLink href="#personal">VACANTES</AnchorLink></li>
			</ul>}
		</div>
	)
}

export default Header