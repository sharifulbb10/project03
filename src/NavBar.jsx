import React from 'react'

function NavBar() {
	return (
		<div className="flex flex-col md:flex-row md:ml-6 h-15 mt-5 mx-3">
			<img src="src/assets/icon.svg" className="w-10 self-center"/>
			<h3 className="self-center text-lg md:ml-4">SHARIFUL ISLAM</h3>
			<div className="self-center whitespace-nowrap md:ml-auto md:mr-10">
				<a href="#" className="p-2 m-1 text-green-700">Home</a><span>/</span>
				<a href="#" className="p-2 m-1 text-green-700">Projects</a><span>/</span>
				<a href="#" className="p-2 m-1 text-green-700">Articles</a><span>/</span>
				<a href="#" className="p-2 m-1 text-green-700">Contact</a>

			</div>
		</div>
	)
}

export default NavBar