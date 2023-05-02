/* eslint-disable no-unused-vars */
import React from 'react';
import Home from '../pages/Home/Home';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="min-h-[calc(100vh-256px)]">
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Main;
