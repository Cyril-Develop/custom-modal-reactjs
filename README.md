# Custom Modal

## 🚀 Getting Started

Install This package :
```
npm install custom-modal-reactjs
```

## ✨ Example:
```js
import React, { useState } from 'react';
import { Modal } from 'custom-modal-reactjs';

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

## 📌 Props

| Prop     | Description                                   |
|----------|-----------------------------------------------|
| text     | The text that will be displayed in the modal
| isOpen   | A boolean that will open the modal if true
| onClose  | The function that will close the modal
