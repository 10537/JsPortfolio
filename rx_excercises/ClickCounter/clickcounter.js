const button = document.querySelector('#clickme')
const clickevent$ = Rx.Observable.fromEvent(button, 'click')
const count$ = clickevent$.bufferWhen(() => clickevent$.debounceTime(250))
.map(list => list.length)

count$.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('done')
)
