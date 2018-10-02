import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AuthStateModel } from '../models/auth.models';
import { AuthService } from '../services/auth.service';
import { Login, Logout } from '../actions/auth.actions';
import { tap } from 'rxjs/operators';
import { Navigate } from '@ngxs/router-plugin';

const defaults: AuthStateModel = {
    email: null,
    password: null,
    token: null
};

@State<AuthStateModel>({
    name: 'auth',
    defaults: defaults
})
export class AuthState {
    @Selector()
    static token(state: AuthStateModel) {
        return state.token;
    }

    @Selector()
    static email(state: AuthStateModel) {
        return state.email;
    }

    constructor(
        private authService: AuthService
    ) {}

    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login) {
        return this.authService.login(action.email, action.password).pipe(
            tap(token => {
                if (token) {
                    ctx.patchState({
                        email: action.email,
                        password: action.password,
                        token: token
                    });
                    ctx.dispatch(new Navigate(['/dashboard']));
                }
            }),
        );
    }

    @Action(Logout)
    Logout(ctx: StateContext<AuthStateModel>) {
        return this.authService.logout().pipe(
            tap(() => {
              ctx.setState(defaults);
              ctx.dispatch(new Navigate(['/login']));
            })
        );
    }
}
