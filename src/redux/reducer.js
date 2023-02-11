import { combineReducers, createStore } from 'redux';
import Team_memberReducer from './Team_memberReducer';
import Login_Reducer from './LoginReducer';
import { reducer as formReducer } from "redux-form";
import Client_requestReducer from './Client_requestReducer';
import MaintainReducer from './MaintainReducer';
import PaymentReducer from './PaymentStatusReducer';
import WithDrawalReducer from './WithDrawalReducer';
const appReducer = combineReducers({
    form: formReducer,
    team_member: Team_memberReducer,
    loged_user: Login_Reducer,
    client_request: Client_requestReducer,
    maintenance: MaintainReducer,
    PaymentReducer,
    withdrawals: WithDrawalReducer
});

// const configureStore = () => {
//     return createStore(appReducer);
// }
export default appReducer;

