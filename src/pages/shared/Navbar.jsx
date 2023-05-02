/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav className="bg-accent text-primary font-lora">
			<div className="flex justify-between  items-center md:p-6 p-4">
				<h2 className="text-2xl font-bold">ChefEmpire</h2>
				<div onClick={() => setOpen(!open)} className="md:hidden ">
					<span>
						{open === true ? (
							<XMarkIcon className="h-6 w-6" />
						) : (
							<Bars3Icon className="h-6 w-6" />
						)}
					</span>
				</div>
				<ul
					className={`md:flex md:space-x-5 text-primary absolute duration-500 md:static ${
						open
							? 'top-2 right-12 text-center bg-accent shadow-md p-2 rounded-md'
							: '-top-96 right-12 text-center bg-accent rounded-md'
					}`}
				>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/blogs">Blogs</NavLink>
					</li>

					<label className="btn btn-ghost btn-circle avatar md:hidden">
						<div className="w-10 rounded-full">
							<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" />
						</div>
					</label>
				</ul>
				<label className="btn btn-ghost btn-circle avatar hidden md:block">
					<div className="w-10 rounded-full">
						<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" />
					</div>
				</label>
			</div>
		</nav>
	);
};

export default Navbar;
