const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
const resetButton = document.querySelector("#reset")

const milliseconds = document.querySelector("#milliseconds")
const seconds = document.querySelector("#seconds")
const minutes = document.querySelector("#minutes")

const start$ = Rx.Observable.fromEvent(startButton, "click")
const stop$ = Rx.Observable.fromEvent(stopButton, "click")
const reset$ = Rx.Observable.fromEvent(resetButton, "click")

const interval$ = Rx.Observable.interval(10)
const pause$ = interval$.takeUntil(stop$)

const init = 0
const accumulator = acc => acc + 1
const reset = acc => init

const StartOrReset$ = Rx.Observable
.merge(pause$.mapTo(accumulator), reset$.mapTo(reset))

const StopOrReset$ = Rx.Observable
.merge(stop$, reset$)

const padding = (num) => num <= 9 ? ('0' + num) : num.toString()

const render = (time) => {
    milliseconds.innerHTML = padding(time.milliseconds)
    seconds.innerHTML = padding(time.seconds)
    minutes.innerHTML = padding(time.minutes)
}

const ToTime = (time) => ({
  milliseconds: Math.floor(time % 100),
  seconds: Math.floor((time / 100) % 60),
  minutes: Math.floor(time / 6000)
})

app$ = start$.switchMapTo(StartOrReset$)
.startWith(init)
.scan((acc, currFunc) => currFunc(acc))
.map(ToTime)
.subscribe(val => render(val))
