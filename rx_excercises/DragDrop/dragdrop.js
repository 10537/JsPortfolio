const dragdrop = document.querySelector('#dragdrop')

// Events
const mousedown$ = Rx.Observable.fromEvent(dragdrop, 'mousedown')
const mousemove$ = Rx.Observable.fromEvent(document, 'mousemove')
const mouseup$ = Rx.Observable.fromEvent(dragdrop, 'mouseup')

const mouseDrap$ = mousedown$.flatMap( Event => {
  const startX = Event.offsetX
  const startY = Event.offsetY

  return mousemove$.map( mEvent => {
    return {
      left: mEvent.clientX - startX,
      top: mEvent.clientY - startY
    }
  }).takeUntil(mouseup$)
})

mouseDrap$.subscribe(pos => {
  dragdrop.style.top = pos.top + 'px'
  dragdrop.style.left = pos.left + 'px'
  //console.log(pos)
})
