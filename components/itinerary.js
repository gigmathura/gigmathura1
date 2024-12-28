import React, { useEffect, useRef, useState } from "react";

const ItineraryDragDrop = ({ initialItinerary, initialUnassignedPlaces }) => {
  const containersRef = useRef([]);
  const draggablesRef = useRef([]);
  const [tempItinerary, setTempItinerary] = useState(initialItinerary);
  const [tempUnassignedPlaces, setTempUnassignedPlaces] = useState(initialUnassignedPlaces);

  useEffect(() => {
    const containers = containersRef.current;
    const draggables = draggablesRef.current;

    let activeElement = null;
    let placeholder = null;

    // Create a placeholder element for drag and drop
    function createPlaceholder() {
      if (!placeholder) {
        placeholder = document.createElement("div");
        placeholder.classList.add("placeholder");
        placeholder.textContent = "Drop here";
      }
    }

    // Helper function to get the correct insertion point for the dragged item
    function getDragAfterElement(container, y) {
      const draggableElements = [
        ...container.querySelectorAll(".draggable:not(.dragging)"),
      ];

      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    }

    // Event listeners for draggable items
    draggables.forEach((draggable) => {
      draggable.addEventListener("touchstart", (e) => {
        draggable.classList.add("dragging");
        activeElement = draggable;
        createPlaceholder();
        e.preventDefault(); // Prevent scroll behavior during touch
      });

      draggable.addEventListener("touchmove", (e) => {
        const touch = e.touches[0];
        draggable.style.position = "absolute";
        draggable.style.left = `${touch.clientX}px`;
        draggable.style.top = `${touch.clientY}px`;
        draggable.style.width = "300px";

        const potentialContainer = document
          .elementFromPoint(touch.clientX, touch.clientY)
          .closest(".container");

        if (potentialContainer && placeholder) {
          const afterElement = getDragAfterElement(
            potentialContainer,
            touch.clientY
          );
          if (afterElement) {
            potentialContainer.insertBefore(placeholder, afterElement);
          } else {
            potentialContainer.appendChild(placeholder);
          }
        }
        e.preventDefault();
      });

      draggable.addEventListener("touchend", () => {
        draggable.classList.remove("dragging");
        if (activeElement && placeholder && placeholder.parentNode) {
          placeholder.parentNode.insertBefore(activeElement, placeholder);
          placeholder.remove();
          activeElement.style.position = "static";
          activeElement.style.left = "";
          activeElement.style.top = "";
          activeElement.style.width = "";
        }
        activeElement = null;
        placeholder = null;
      });

      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });

    // Event listeners for containers
    containers.forEach((container) => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");
        if (afterElement == null) {
          container.appendChild(draggable);
        } else {
          container.insertBefore(draggable, afterElement);
        }
      });
    });
  }, []);

  // Handle dropping of a draggable item
  const handleDrop = (e, targetSection, targetIndex) => {
    e.preventDefault();
    const draggedPlace = e.target; // The place being dragged

    if (targetSection === "unassigned" && draggedPlace) {
      // Move the place from the itinerary to unassigned
      setTempUnassignedPlaces([...tempUnassignedPlaces, draggedPlace]);
      setTempItinerary(tempItinerary.filter((place) => place !== draggedPlace));
    } else if (targetSection === "itinerary" && draggedPlace) {
      // Move the place to the itinerary day
      const updatedItinerary = [...tempItinerary];
      updatedItinerary[targetIndex].places.push(draggedPlace);
      setTempItinerary(updatedItinerary);
      setTempUnassignedPlaces(tempUnassignedPlaces.filter((place) => place !== draggedPlace));
    }
  };

  return (
    <>
      <style jsx>{`
        .draggable {
          padding: 1rem;
          background-color: white;
          border: 1px solid black;
          cursor: grab;
        }

        .draggable.dragging {
          opacity: 0.8;
          background-color: skyblue;
          cursor: grabbing;
        }

        .draggable,
        .container {
          touch-action: none;
        }

        .placeholder {
          border: 2px dashed #666;
          padding: 1rem;
          background-color: #f0f0f0;
          opacity: 0.5;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          min-height: 300px;
        }

        .container.bg-indigo-500 {
          background-color: #6366f1;
        }

        .container.bg-orange-500 {
          background-color: #fb923c;
        }

        .container.bg-green-500 {
          background-color: #22c55e;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .space-x-2 {
          margin-left: 8px;
          margin-right: 8px;
        }

        .w-4/5 {
          width: 80%;
        }

        .h-[300px] {
          height: 300px;
        }

        .mt-10 {
          margin-top: 2.5rem;
        }

        .flex {
          display: flex;
        }

        .items-center {
          align-items: center;
        }

        .justify-center {
          justify-content: center;
        }

        .shadow-lg {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div className="mx-auto mt-10 space-x-2 w-4/5 flex items-center justify-center">
        {/* Unassigned Places */}
        <div
          ref={(el) => (containersRef.current[0] = el)}
          className="flex flex-col container bg-indigo-500"
        >
          <h3>Unassigned Places</h3>
          {tempUnassignedPlaces.map((place, index) => (
            <div
              key={index}
              className="draggable"
              draggable="true"
              ref={(el) => (draggablesRef.current[index] = el)}
              onDragStart={(e) => handleDrop(e, "unassigned", index)}
            >
              {place.name}
            </div>
          ))}
        </div>

        {/* Itinerary */}
        {tempItinerary.map((day, dayIndex) => (
          <div
            key={dayIndex}
            ref={(el) => (containersRef.current[dayIndex + 1] = el)}
            className="flex flex-col container bg-orange-500"
          >
            <h4>{day.day}</h4>
            {day.places.map((place, placeIndex) => (
              <div
                key={placeIndex}
                className="draggable"
                draggable="true"
                ref={(el) => (draggablesRef.current[placeIndex] = el)}
                onDragStart={(e) => handleDrop(e, "itinerary", dayIndex)}
              >
                {place.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ItineraryDragDrop;
