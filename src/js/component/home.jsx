import React from "react";
import NavbarExample from "./navbar";
import CardGrid from "./cardgrid";
// import JumbotronExample from "./jumbotron";
import Footer from "./footer";

const Home = () => {
	return (
		<div>
			<div className="text-center">
				<NavbarExample />
			</div>
			<div>
				{/* <JumbotronExample /> */}
			</div>
			<div>
				<CardGrid />
			</div>
			<div>
				<Footer />
			</div>

		</div>
	);
};

export default Home;
