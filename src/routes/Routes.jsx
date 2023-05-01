/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
		],
	},
]);

export default router;
