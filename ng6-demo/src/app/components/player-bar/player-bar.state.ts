import { State, Action, StateContext, Selector, actionMatcher, createSelector } from '@ngxs/store';
import { AddPlayData, Play, Stop, Pause } from './player-bar.actions';
import { DataService } from '../../services/data.service';
import { tap, switchMap, takeWhile } from 'rxjs/operators';
import { timer, Subscription } from 'rxjs';

export interface PlayerBarStateModel {
    playing: boolean;
    data: number[];
}

const defaults: PlayerBarStateModel = {
    playing: false,
    data: Array.from(new Array(12), () => 0)
};

@State<PlayerBarStateModel>({
    name: 'player',
    defaults
})
export class PlayerBarState {
    timer$: Subscription;

    constructor(
        private dataService: DataService
    ) {}


    @Action(Pause)
    pausePlaying(context: StateContext<PlayerBarStateModel>) {
        context.patchState({
            playing: false
        });
    }

    @Action(Stop)
    stopPlaying(context: StateContext<PlayerBarStateModel>) {
        if (this.timer$) {
            this.timer$.unsubscribe();
        }
        context.patchState({
            playing: false,
            data: defaults.data
        });
    }

    @Action(Play)
    play(context: StateContext<PlayerBarStateModel>, action: Play) {
        context.patchState({
            playing: true,
        });

        this.timer$ = timer(0, action.interval).pipe(
            switchMap(() => this.dataService.getChartNumber()),
            takeWhile(() => context.getState().playing)
        ).subscribe(data => {
            context.dispatch(new AddPlayData(data));
        });
    }

    @Action(AddPlayData)
    AddPlayData(context: StateContext<PlayerBarStateModel>, action: AddPlayData) {
        const copy = [...context.getState().data];
        copy.shift();
        copy.push(action.payload);

        context.patchState({
            data: copy
        });
    }

}
