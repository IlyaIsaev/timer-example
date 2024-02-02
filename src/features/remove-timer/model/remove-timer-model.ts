import { timerList } from "@entities/timer";

export const removeTimer = () => {
  const timer = timerList.removeTimer();

  if (timer) {
    clearTimeout(timer.timeoutId ?? undefined);

    timer.setTimoutId(null);
  }
};
