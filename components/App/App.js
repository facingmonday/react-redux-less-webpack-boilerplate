import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Loading from '../Loading';
import style from './App.css';
import '../../styles/index.less';

/**
 * Demo application showing how to use React, Redux, and CSS 
 * Modules to create a base client app.
 */
class App extends Component {
    render() {
        return (
            <div className={style.app}>
                <Header />
                <Main />
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(App);