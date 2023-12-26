import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

function Navbar() {
	return (
		<div className='nav'>
			<div className='logo'>
				<h1>SnapX</h1>
			</div>
			<div className='list'>
				<h4>HOME</h4>
				<h4>PHOTOS& VIDEOS <FaAngleDown /></h4>
				<h4>CATEGORIES</h4>
				<h4>USERS</h4>
			</div>
			<div className='btn'>
				<button> <FaUser /> Sign In/Up</button>
			</div>
		</div>
	)
}

export default Navbar