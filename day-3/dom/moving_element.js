document.addEventListener('DOMContentLoaded', function(){
  let draggingElement;

  let x=0;
  let y=0;

  const mouseDownHandler = function(e){
    draggingElement= e.target;
    const rect = draggingElement.getBoundingClientRect();
    x = e.pageX - rect.left;
    y = e.pageY - rect.top;
    console.log(x);
    console.log(y);
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }

  const mouseMoveHandler = function(e){
    const draggingRect = draggingElement.getBoundingClientRect();

    if (!isDraggingStarted) {
      // Update the flag
      isDraggingStarted = true;

      // Let the placeholder take the height of dragging element
      // So the next element won't move up
      placeholder = document.createElement('div');
      placeholder.classList.add('placeholder');
      draggingElement.parentNode.insertBefore(
        placeholder,
        draggingElement.nextSibling
      );

      // Set the placeholder's height
      placeholder.style.height = `${draggingRect.height}px`;
    }
    draggingElement.style.position = 'absolute';
    draggingElement.style.top = `${e.pageY - y}px`;
    draggingElement.style.left = `${e.pageX - x}px`;
  }

  const mouseUpHandler = function(e){
    placeholder && placeholder.parentNode.removeChild(placeholder);
    // Reset the flag
    isDraggingStarted = false;

    draggingElement.style.removeProperty('top');
    draggingElement.style.removeProperty('left');
    draggingElement.style.removeProperty('position');
    x = null;
    y = null;
    draggingElement=null;
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }

  const list =document.getElementById('list');
  [].slice.call(list.querySelector('.drag')).forEach(function(item){
    item.addEventListener('mousedown', mouseDownHandler);
  });
})