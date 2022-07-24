
import { createStore } from "../customRedux/createStore";
import { myApplyMiddleware } from '../customRedux/myApplyMiddleWare';
import { myMiddleWear } from "../customRedux/myMiddleWare";
import { reducer, initialState } from './reducer'

export const store = createStore(reducer, initialState, myApplyMiddleware(myMiddleWear));

