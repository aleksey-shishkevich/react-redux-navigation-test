'use strict';

import React, {Component} from 'react';
import {AppRegistry,} from 'react-native';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
//import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers'
import Test from './containers/Test';
import Start from './containers/Start';
import {
  Router,
  Scene,
  TabBar,
  Reducer,
  ActionConst
  } from 'react-native-router-flux';

const createStoreWithMiddleware = applyMiddleware(
  thunk, 
)(createStore);

class ReactReduxNavigationTest extends Component{

    reducerCreate(params){
        const defaultReducer = Reducer(params);
        return (state, action)=>{
            switch (action.type) {
                case ActionConst.PUSH:
                    console.log(ActionConst.PUSH, action.key);
                    break;
                case ActionConst.FOCUS:
                    console.log(ActionConst.FOCUS, action.scene.sceneKey);
                    break;
                default:
                    console.log(action.type);
            }
            return defaultReducer(state, action);
        }
    }
    
    
    render() {
        const ReduxRouter = connect()(Router);
        const store = createStoreWithMiddleware(reducer);
        return (
        <Provider store={store}>
            <ReduxRouter createReducer={this.reducerCreate} >
        	    <Scene key="root" >
                <Scene key="Start" 
                                duration={2000}
                                initial={true}
                                 component={Start}
                                 title="Start"
                                 />
                             
                <Scene key="Test" 
                                 duration={2000}
                                 component={Test}
                                 title="Test"
                                 />
                </Scene>
            </ReduxRouter>
        </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactReduxNavigationTest', () => ReactReduxNavigationTest);
