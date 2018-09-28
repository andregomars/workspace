import { State, Action, StateContext, Selector, actionMatcher } from '@ngxs/store';
import { AddPlayData, Play, Stop, Resume, Pause } from './player-bar.actions';
import { resetApplicationState } from '@angular/core/src/render3/instructions';

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
    @Selector()
    static getPlayingData(state: PlayerBarStateModel) {
        return state.data;
    }

    @Action(AddPlayData)
    addPlayData(context: StateContext<PlayerBarStateModel>, action: AddPlayData) {
        const current = context.getState();
        const data = [...current.data, action.payload];
        context.patchState({
            data: data
        });
    }

    @Action(Pause)
    pausePlaying(context: StateContext<PlayerBarStateModel>, action: Play) {
        context.patchState({
            playing: false
        });
    }

    @Action(Stop)
    stopPlaying(context: StateContext<PlayerBarStateModel>, action: Play) {
        context.patchState({
            playing: false,
            data: defaults.data
        });
    }
    // stopPlaying({ setState }: StateContext<PlayerBarStateModel>) {
    //     setState({ ...defaults });
    // }

    @Action(Play)
    play(context: StateContext<PlayerBarStateModel>, action: Play) {
        context.patchState({
            playing: true,
            data: defaults.data
        });
    }

    @Action(Resume)
    resume(context: StateContext<PlayerBarStateModel>, action: Resume) {
        const current = context.getState();
        const data = [...current.data, action.payload];
        context.patchState({
            playing: true,
            data: data
        });
    }
}
