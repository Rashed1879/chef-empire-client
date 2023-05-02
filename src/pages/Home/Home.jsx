/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../../components/Chef/Chef';

const Home = () => {
	const allChef = useLoaderData();
	return (
		<div className="bg-accent">
			<section>
				<div
					className="hero min-h-screen"
					style={{
						backgroundImage: `url("../../../public/images/header-banner.jpg")`,
					}}
				>
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-md">
							<h1 className="mb-5 text-6xl font-bold text-warning">
								Enjoy Our <br />
								<span className="text-secondary">
									Delicious
								</span>{' '}
								Food
							</h1>
							<p className="mb-5">
								Welcome to Chef Empire where you can indulge in
								a mouth-watering culinary experience! We're
								thrilled to invite you to enjoy our delicious
								food and discover a world of flavors that will
								leave you wanting more.
							</p>
							<button className="btn btn-primary">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</section>
			<section>
				<h2 className="text-5xl text-center text-primary my-8">
					Our Chef Masters
					<hr className="mt-5 w-11/12 md:w-2/4 border border-primary mx-auto" />
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
					{allChef.map((chef) => (
						<Chef key={chef.id} chef={chef}></Chef>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
