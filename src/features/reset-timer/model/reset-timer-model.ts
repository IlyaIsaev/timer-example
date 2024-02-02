import { TimerModel } from "@entities/timer";

export const resetTimer = (timer: TimerModel) => {
  if (timer.timeoutId) {
    clearTimeout(timer.timeoutId);

    timer.setTimoutId(null);
  }

  timer.resetValue();
};
