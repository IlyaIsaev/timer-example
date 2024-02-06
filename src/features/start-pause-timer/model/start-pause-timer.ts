import { TimerModel } from "@entities/timer";

const startTimer = (
  timer: TimerModel,
  desirableDelay = 100,
  delayInUse = desirableDelay,
  startTime = Date.now()
) => {
  const timeoutId = setTimeout(() => {
    timer.tick();

    const operationTime = Date.now() - startTime;

    const reducedDelay = desirableDelay - (operationTime - desirableDelay);

    startTimer(timer, desirableDelay, reducedDelay);
  }, delayInUse);

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
