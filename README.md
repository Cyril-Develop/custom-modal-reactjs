# Custom Modal

## Getting Started

Install This package :
```
npm install custom-modal-reactjs
```

Exemple:
```js
import React, { useState } from 'react';
import Modal from 'custom-modal-reactjs';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal text="Example Text" isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
```