/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Recipe = ({ recipe }) => {
	console.log(recipe);
	const { name, image, cooking_method, ingredients, rating } = recipe;
	return (
		<div className="flex items-center bg-accent shadow-xl rounded-xl">
			<div className="w-1/4 h-min">
				<img
					className="p-3 rounded-xl w-full h-fit"
					src={image}
					alt=""
				/>
			</div>
			<div className="text-secondary w-2/3 space-y-3">
				<h2 className="text-primary text-3xl font-bold">{name}</h2>
				<div>
					Ingredients :{' '}
					{ingredients.map((ingredient, i) => (
						<span key={i}>{ingredient}, </span>
					))}
				</div>
				<p>Cooking Method : {cooking_method}</p>
				<button className="btn btn-primary hover:btn-secondary">
					Favourite
				</button>
			</div>
		</div>
	);
};

export default Recipe;
