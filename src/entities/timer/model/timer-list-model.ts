import { makeAutoObservable } from "mobx";
import { TimerModel } from "./timer-model";

class TimerListModel {
  value: TimerModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTimer(timer: TimerModel) {
    this.value.push(timer);
  }

  removeTimer() {
    return this.value.pop();
  }
}

export const timerList = new TimerListModel();
