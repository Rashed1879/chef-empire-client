/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import ChefRecipes from '../pages/ChefRecipes/ChefRecipes';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
				loader: () => fetch('http://localhost:3000/allChef'),
			},
			{
				path: 'chefrecipes/:id',
				element: (
					<PrivateRoute>
						<ChefRecipes></ChefRecipes>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:3000/allChef/${params.id}`),
			},
			{
				path: 'register',
				element: <Register></Register>,
			},
			{
				path: 'login',
				element: <Login></Login>,
			},
		],
	},
]);

export default router;
