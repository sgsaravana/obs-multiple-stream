import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface AppProps {
	// state: any,
	// actions: any
}

export default class App extends React.Component<AppProps, any> {

	render() {
		return (
			<div>
				<h1>RTMP Router !</h1>
			</div>
		);
	}
}

// const mapStateToProps = (state: any) => {
//   return {
//     state: state
//   };
// };

// const mapDispatchToProps = (dispatch: Dispatch<void>) => {
//   return {
//     actions: {
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

