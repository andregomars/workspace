import { Action } from '@ngrx/store';
import { GreetingActionType } from './greeting.actions';

export function GreetingReducer(state: string = 'hello', action: Action) {
  switch (action.type) {
    case GreetingActionType.ToEnglish:
      return 'Hello';
    case GreetingActionType.ToChinese:
      return '你好';
    default:
      return state;
  }

}
