import { useEffect } from "react";
import { io } from "socket.io-client";

// create the client side socket
const socket = io('http://localhost:4000');

function App() {

  const sendData = () => {
    // client send an event called client with some data 
    socket.emit('client', 'Client data');
    console.log('send');
  }

  useEffect(() => {

    // client listen an event called join
    socket.on('join', (data) => {
      console.log(`client get the data ${data}`);
    });

    return () => {
      socket.removeAllListeners();
    };

  }, []);

  return (
    <>
      <button onClick={sendData}>Send</button>
    </>
  )
}

export default App;
