import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Request Notification permission when the component loads
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  const showNotification = () => {
    if (Notification.permission === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Hello There!", {
          body: "This is a notification from your PWA.",
          icon: "/logo192.png", // Optional: Path to the icon for the notification
          vibrate: [100, 50, 100], // Optional: Vibration pattern
          tag: "pwa-notification", // Optional: Tag to identify the notification
        });
      });
    } else {
      alert("Notifications are blocked. Please enable them in your browser.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello There</p>
        <button onClick={showNotification}>Show Notification</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
