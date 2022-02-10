import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Result from "./pages/Result";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <div>
                            <Route path="/" component={Result} exact/>
                        </div>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;