import { Button } from "@shared/ui-kit/button";
import { removeTimer } from "../model/remove-timer-model";

export const RemoveTimer = () => (
  <Button onClick={removeTimer}>Remove Timer</Button>
);
