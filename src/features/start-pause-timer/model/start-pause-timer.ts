import { TimerModel } from "@entities/timer";

const startTimer = (timer: TimerModel) => {
  const timeoutId = setTimeout(() => {
    timer.tick();

    startTimer(timer);
  }, 100);

  timer.setTimoutId(timeoutId);
};

const pauseTimer = (timer: TimerModel) => {
  clearTimeout(timer.timeoutId ?? undefined);

  timer.setTimoutId(null);
};

export const startPauseTimer = (timer: TimerModel) => {
  if (timer?.timeoutId === null) {
    startTimer(timer);

    return;
  }

  if (timer && timer.timeoutId !== null) {
    pauseTimer(timer);
  }
};
