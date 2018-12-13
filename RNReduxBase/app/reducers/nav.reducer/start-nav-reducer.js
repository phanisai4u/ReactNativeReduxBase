import { NavigationActions } from "react-navigation";
import { AppNavigator } from "../../navigators";

export function SHOW_START_SCREEN(state, action) {
  console.log('SHOW_START_SCREEN' + action);
  return AppNavigator.router.getStateForAction(
    NavigationActions.navigate({ routeName: "start" }),
    state
  );
}