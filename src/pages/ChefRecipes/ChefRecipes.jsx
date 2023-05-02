/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../../components/Recipe/Recipe';

const ChefRecipes = () => {
	const chefData = useLoaderData();
	const { name, image, bio, likes, recipeInfo, recipes, experience } =
		chefData;
	return (
		<div>
			<div className="hero min-h-screen bg-accent">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={image}
						className="max-w-lg rounded-lg shadow-2xl h-full"
					/>
					<div className="text-primary ml-2">
						<h1 className="text-5xl font-bold">{name}</h1>
						<p className="py-6 font-semibold">{bio}</p>
						<p className="py-6">
							Year of Experience : {experience}
						</p>
						<p className="py-6">Number of Recipes : {recipes}</p>
						<p className="py-6">Likes : {likes}</p>
					</div>
				</div>
			</div>
			<div className="mx-5 my-5">
				<h1 className="text-5xl font-bold text-center text-warning my-6">
					Popular Recipes
				</h1>
				<hr className="border border-primary my-3 w-2/4 mx-auto" />
				<div className="space-y-5">
					{recipeInfo.map((recipe, i) => (
						<Recipe key={i} recipe={recipe}></Recipe>
					))}
				</div>
			</div>
		</div>
	);
};

export default ChefRecipes;
