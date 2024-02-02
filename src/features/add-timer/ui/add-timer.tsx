import { Button } from "@shared/ui-kit/button";
import { TimerModel, timerList } from "@entities/timer";

const addTimer = () => {
  timerList.addTimer(new TimerModel());
};

export const AddTimer = () => <Button onClick={addTimer}>Add Timer</Button>;
