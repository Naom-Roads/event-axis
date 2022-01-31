import React from 'react';
import './WelcomeScreen.scss';

function WelcomeScreen(props) {
	return props.showWelcomeScreen ?
		(
			<div className="container mb-0">
			<div className="WelcomeScreen">

				<div className="brand card-body">

				<h1 className="shadows">
					<span>e</span>
					<span>v</span>
					<span>e</span>
					<span>n</span>
					<span>t</span>
					<span>a</span>
					<span>x</span>
					<span>i</span>
					<span>s</span></h1>
				</div>
					<h4>
						Log in to see upcoming events
					</h4>
				<div className="button_cont" align="center">
					<div className="google-btn">
						<div className="google-icon-wrapper">
							<img className="google-icon"
							     src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
							     alt="Google sign-in"/>

						<button onClick={() => {
							props.getAccessToken();
						}}
						        rel="nofollow noopener"
						        className="btn-text"
						>
							<b>Sign in with google</b>
						</button>
					</div>
				</div>
				<a href="https://Naom-Roads.github.io/event-axis/privacypolicy.html">
					Privacy Policy
				</a>
			</div>
			</div>
			</div>
		)
		: null;
}

export default WelcomeScreen;

