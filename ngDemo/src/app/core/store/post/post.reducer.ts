import * as PostActions from './post.actions';
import { Post } from '../../../models/post.model';

export type Action = PostActions.All;

const defaultState: Post = {
    text: 'Default vote',
    likes: 0
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
}

export function PostReducer(state: Post = defaultState, action: Action) {
    switch (action.type) {
        case PostActions.EDIT_TEXT:
            return newState(state, { text: action.payload });
        case PostActions.UPVOTE:
            return newState(state, { likes: state.likes + 1 });
        case PostActions.DOWNVOTE:
            return newState(state, { likes: state.likes - 1 });
        case PostActions.RESET:
            return defaultState;
        default:
            return state;
    }
}
