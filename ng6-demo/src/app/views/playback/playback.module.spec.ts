import { PlaybackModule } from './playback.module';

describe('PlaybackModule', () => {
  let playbackModule: PlaybackModule;

  beforeEach(() => {
    playbackModule = new PlaybackModule();
  });

  it('should create an instance', () => {
    expect(playbackModule).toBeTruthy();
  });
});
