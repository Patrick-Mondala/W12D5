import {htmlGenerator} from "./warmup";

export class Clock {
  constructor(clockElement) {
    const currentTime = new Date();

    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
    this.clockElement = clockElement;

    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    const timeString = [this.hours, this.minutes, this.seconds].join(":");

    htmlGenerator(timeString, this.clockElement);
  }

  _tick() {
    this._incrementSeconds();

    this.printTime();
  }

  _incrementSeconds() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }

  _incrementHours() {
    this.hours = (this.hours + 1) % 24;
  }
}