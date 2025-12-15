"use client"
import { useState } from "react";
import { DirectionModal } from "./DirectionModal";

// Example of using all different directions
export function ModalExamples() {
  const [modalStates, setModalStates] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });

  const openModal = (direction) => {
    setModalStates(prev => ({ ...prev, [direction]: true }));
  };

  const closeModal = (direction) => {
    setModalStates(prev => ({ ...prev, [direction]: false }));
  };

  return (
    <div className="p-4 space-y-4">
      <button onClick={() => openModal('left')} className="btn">
        Open Left Modal
      </button>
      <button onClick={() => openModal('right')} className="btn">
        Open Right Modal
      </button>
      <button onClick={() => openModal('top')} className="btn">
        Open Top Modal
      </button>
      <button onClick={() => openModal('bottom')} className="btn">
        Open Bottom Modal
      </button>

      {/* Left Modal */}
      <DirectionModal
        isOpen={modalStates.left}
        onClose={() => closeModal('left')}
        direction="left"
        title="Left Side Modal"
      >
        <div className="p-4">
          Content from left side
        </div>
      </DirectionModal>

      {/* Right Modal */}
      <DirectionModal
        isOpen={modalStates.right}
        onClose={() => closeModal('right')}
        direction="right"
        title="Right Side Modal"
      >
        <div className="p-4">
          Content from right side
        </div>
      </DirectionModal>

      {/* Top Modal */}
      <DirectionModal
        isOpen={modalStates.top}
        onClose={() => closeModal('top')}
        direction="top"
        title="Top Modal"
        size="full"
      >
        <div className="p-4">
          Content from top
        </div>
      </DirectionModal>

      {/* Bottom Modal */}
      <DirectionModal
        isOpen={modalStates.bottom}
        onClose={() => closeModal('bottom')}
        direction="bottom"
        title="Bottom Modal"
        size="full"
      >
        <div className="p-4">
          Content from bottom
        </div>
      </DirectionModal>
    </div>
  );
}