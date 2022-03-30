import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Todos from "./todos-component";
import todos from "./reducers/todos-reducer";
const store = createStore(combineReducers({hello, todos}));


const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <HelloReduxExampleComponent/>
                <Todos />
            </div>
        </Provider>
    );
};
export default ReduxExamples;