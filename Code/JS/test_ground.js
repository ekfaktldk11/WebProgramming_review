const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach(draggable => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

// containers.forEach(container => {
//   container.addEventListener("dragover", e => {
//     e.preventDefault();
//     const draggable = document.querySelector(".dragging");
//     container.appendChild(draggable);
//   });
// });

// containers.forEach(container => {
//   container.addEventListener("dragover", e => {
//     e.preventDefault();
//     const afterElement = getDragAfterElement(container, e.clientX);
//     console.log(afterElement)
//     const draggable = document.querySelector(".dragging");
//     container.appendChild(draggable);
//   });
// });

containers.forEach(container => {
  container.addEventListener("dragover", e => {
    e.preventDefault();
    console.log("e.clientX :", e.clientX)
    const afterElement = getDragAfterElement(container, e.clientX);
    console.log("afterElement :", afterElement)
    const draggable = document.querySelector(".dragging");
    if (afterElement === undefined) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(container, x) {
  const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];
  console.log("draggableElements :", draggableElements);
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      console.log("box : ", box)
      const offset = x - box.left - box.width / 2;
      console.log("offset : ", offset)
      // console.log(offset);
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number(1e9)*(-1) },
  ).element;
}

