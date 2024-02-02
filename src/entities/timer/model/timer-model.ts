import { makeAutoObservable } from "mobx";

let timerId = 0;

export class TimerModel {
  timeoutId: number | null = null;

  id = timerId++;

  value = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get time() {
    const milliseconds = Math.floor(this.value % 1000);

    const seconds = Math.floor((this.value / 1000) % 60);

    const minutes = Math.floor((this.value / (1000 * 60)) % 60);

    const minStr = minutes < 10 ? "0" + minutes : String(minutes);

    const secStr = seconds < 10 ? "0" + seconds : String(seconds);

    const millisecStr = milliseconds === 0 ? "000" : String(milliseconds);

    return `${minStr}:${secStr}.${millisecStr}
  `;
  }

  tick() {
    this.value += 100;
  }

  resetValue() {
    this.value = 0;
  }

  setTimoutId(timeoutId: number | null) {
    this.timeoutId = timeoutId;
  }
}
