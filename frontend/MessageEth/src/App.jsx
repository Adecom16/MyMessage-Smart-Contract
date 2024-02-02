import { useState } from "react";
import { ethers } from "ethers";
import contractABI from "./Abi.json";

function App() {
  const [message, setMessage] = useState("");
  const contractAddress = "0xb4F69b2b04Ed8ebf72381b9Dc3e5dea81b3cF855"; // Update with your contract address

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else {
      alert("Please install MetaMask to interact with this application.");
    }
  }

  async function getMessage() {
   if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

    try {
      const message = await contract.getMessage();
      setMessage(message);
    } catch (error) {
      console.error("Error getting message:", error);
    }
  }
  }

  async function setMessageOnContract(newMessage) {
      if (typeof window.ethereum !== "undefined") {
    await connectWallet();

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
    
    try {
      const transaction = await contract.setMessage(newMessage);
      await transaction.wait();
      console.log("Message set successfully!");
    } catch (error) {
      console.error("Error setting message:", error);
    }
  }
  }

  return (
    <div className="App">
      <h1>Smart Contract Interaction</h1>
      <button onClick={getMessage}>Get Message</button>
      <button onClick={() => setMessageOnContract("New message")}>
        Set Message
      </button>
      <p>Current Message: {message}</p>
    </div>
  );
}

export default App;
