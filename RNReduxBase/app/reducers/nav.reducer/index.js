import { NavigationActions, DrawerActions } from "react-navigation";
import { AppNavigator } from "../../navigators";

const authLoadingAction = AppNavigator.router.getActionForPathAndParams('Start');
const initialNavState = AppNavigator.router.getStateForAction(
  authLoadingAction
);

import * as ActionHandlers from './action-handlers'

export function NavReducer(state = initialNavState, action) {
  
  const nextState = (ActionHandlers[action.type]) 
  ? ActionHandlers[action.type](state, action)
  : AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}
