import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col xs={6} xsOffset={3}>
						{this.props.children}
					</Col>
				</Row>
				<Row>
					<Col xs={6} xsOffset={3}>
						<h4>View source for the server rendered html. The links below allow you to load the pages via the server or client side.</h4>
						<p>
							<strong>Links to server rendered page</strong>
							<br/>
							<a href="/">Home</a>
							<br/>
							<a href="/about">About</a>
						</p>
						<p>
							<strong>Links to client rendered page</strong>
							<br/>
							<Link to="/">Home </Link>
							<br/>
							<Link to="about">About </Link>
						</p>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default App;