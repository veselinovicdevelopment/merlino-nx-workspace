import React, { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  const childData = {
    text: 'React',
  };

  // Attach event listener to Custom Event
  useEffect(() => {
    window.addEventListener('btn-clicked', eventHandler);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const eventHandler = (event: any) => {
    window.alert(event?.detail.message);
  };

  return (
    <>
      <h1 className="text-lg text-center mt-32 mb-10">Here is React App</h1>
      <merlino-mike-good
        framework={JSON.stringify(childData)}
      ></merlino-mike-good>
    </>
  );
}

export default App;
