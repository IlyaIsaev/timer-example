import { TimerModel } from "@entities/timer";
import { Button } from "@shared/ui-kit/button";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { resetTimer } from "../model/reset-timer-model";

type ResetTimerProps = {
  timer: TimerModel;
};

export const ResetTimer = observer<ResetTimerProps>(({ timer }) => {
  const handleClick = useCallback(() => {
    resetTimer(timer);
  }, [timer]);

  return <Button onClick={handleClick}>Reset</Button>;
});
