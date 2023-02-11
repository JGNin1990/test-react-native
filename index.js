
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// import { isSignedIn } from "./auth";
// import App from "./App";
// import Login from "./view/Login/Login";

// export default class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             signedIn: false,
//             checkedSignIn: false
//         };
//     }

//     componentDidMount() {
//         isSignedIn()
//             .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
//             .catch(err => alert("An error occurred"));
//     }

//     render() {
//         const { checkedSignIn, signedIn } = this.state;

//         // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
//         if (!checkedSignIn) {
//             return null;
//         }

//         if (signedIn) {
//             return <App />;
//         } else {
//             return <Login />;
//         }
//     }
// }


