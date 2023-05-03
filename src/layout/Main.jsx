/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="min-h-[calc(100vh-256px)]">
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default Main;
