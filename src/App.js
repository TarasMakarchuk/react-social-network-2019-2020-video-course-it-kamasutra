import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import InstrumentsContainer from "./components/Instruments/InstrumentsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {prefix} from "redux-form/lib/actionTypes";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('Some error occured');
        console.error(promiseRejectionEvent);
    };

    componentDidMount() {

        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)

    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>

                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Switch>

                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>

                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>

                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>

                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>

                        <Route path='/users' render={() => <UsersContainer
                        />}/>

                        <Route path='/login' render={() => <LoginPage
                        />}/>

                        <Route path='/instruments' render={() => <InstrumentsContainer
                        />}/>

                        <Route path='*' render={() => <div>404 not found</div>}/>

                        {/*<Route path='/friends' render={() => <Friends*/}
                        {/*    addFriends={props.state.sidebar}*/}
                        {/*/>}/>*/}
                    </Switch>

                </div>
                {/*<Profile/>*/}
            </div>
        );
    };
}

// console.log('APP props.state.sidebar ', props.state.sidebar);

const mapStateToProps = state => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = props => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SamuraiJSApp;