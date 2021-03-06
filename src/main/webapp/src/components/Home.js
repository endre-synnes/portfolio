import React, { Component } from "react";
import "./../index.scss";
import {connect} from "react-redux";
import { Grid, Cell } from 'react-mdl';
const imagesPath = process.env.PUBLIC_URL + "/assets/";

class Home extends Component {

	componentDidMount() {

	}

	render() {
		return (
			<div className="background">
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src={`${imagesPath}avatar.jpg`}
							alt="avatar"
							className="avatar-img"
						/>

						<div className="banner-text">
							<h1>Endre Mikal Synnes</h1>
							<h3>Full Stack Developer</h3>

							<hr/>

							<p> Kotlin | Java | Spring | Swift | C# | JavaScript | React | MySQL | NodeJS </p>

							<div className="social-links">

								{/* LinkedIn */}
								<a href="https://www.linkedin.com/in/endre-mikal-synnes-937103110/" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/* Github */}
								<a href="https://github.com/endre-synnes" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { state }
}

export default connect(mapStateToProps)(Home);