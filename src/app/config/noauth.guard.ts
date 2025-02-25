import { CanDeactivateFn } from '@angular/router';

export const noauthGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
