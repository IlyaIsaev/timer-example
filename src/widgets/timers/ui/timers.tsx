import { Timer, timerList } from "@entities/timer";
import { AddTimer } from "@features/add-timer";
import { RemoveTimer } from "@features/remove-timer";
import { ResetTimer } from "@features/reset-timer";
import { StartPauseTimer } from "@features/start-pause-timer";
import { grid, hstack, vstack } from "@style/patterns";
import { observer } from "mobx-react-lite";

export const Timers = observer(() => {
  return (
    <div className={vstack({ gap: "4", alignItems: "stretch" })}>
      <div className={hstack()}>
        <AddTimer />

        <RemoveTimer />
      </div>

      <div className={grid({ columns: 2 })}>
        {timerList.value.map((timer) => (
          <Timer
            key={timer.id}
            timer={timer}
            startPause={<StartPauseTimer timer={timer} />}
            reset={<ResetTimer timer={timer} />}
          />
        ))}
      </div>
    </div>
  );
});
