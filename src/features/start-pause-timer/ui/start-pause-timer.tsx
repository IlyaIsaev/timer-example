import { TimerModel } from "@entities/timer";
import { Button } from "@shared/ui-kit/button";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { startPauseTimer } from "../model/start-pause-timer";

type StartPauseTimerProps = {
  timer: TimerModel;
};

export const StartPauseTimer = observer<StartPauseTimerProps>(({ timer }) => {
  const handleClick = useCallback(() => {
    startPauseTimer(timer);
  }, [timer]);

  return <Button onClick={handleClick}>Start / Pause</Button>;
});
