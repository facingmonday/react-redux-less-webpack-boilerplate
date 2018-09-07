import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

//Components
import Dashboard from '../Dashboard';

//Style
import style from './Main.css';

class Main extends Component {
    render() {
        return (
            <div className={style.container}>
                
                
                <div className={style.leftColumn}>
                    <div className={style.results}>
                        <HashRouter>
                            <Switch>
                                <Route exact path='/' component={Dashboard}/>
                            </Switch>
                        </HashRouter>
                    </div>
                </div>
               
                <div className={style.rightColumn} >
                    
                </div>
                
            </div>
        );
    }
}

export default Main;