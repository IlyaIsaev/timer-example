import { css, cx } from "@style/css";
import { center, hstack, vstack } from "@style/patterns";
import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { TimerModel } from "..";

const rootStyle = css({
  h: "130px",
  border: "1px solid #ccc",
  rounded: "2px",
  p: "0 30px",
});

type TimerProps = {
  timer: TimerModel;
  startPause: ReactNode;
  reset: ReactNode;
};

export const Timer = observer<TimerProps>(({ timer, startPause, reset }) => (
  <div className={cx(center(), vstack({ gap: "4" }), rootStyle)}>
    {timer.time}
    <div className={hstack()}>
      {startPause}
      {reset}
    </div>
  </div>
));
