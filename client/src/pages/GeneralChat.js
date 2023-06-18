import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import { Input } from "antd";

const socket = io.connect("http://localhost:3001");

const GeneralChat = () => {
  const [user, SetUser] = useState();
  const [textArea , SetTextArea] = useState();

  const helper = async () => {
    try {
      const user = await axios.post(
        "http://localhost:5000/get-user-info-by-id",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      SetUser(user.data.data.name);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    helper();
  }, []);

//   function sendMessage(message) {
//     let msg = {
//       user: user,
//       message: message.trim(),
//     };
//     // Append
//     appendMessage(msg, "outgoing");
//     textarea.value = "";
//     scrollToBottom();

//     // Send to server
//     socket.emit("message", msg);
//   }

//   function appendMessage(msg, type) {
//     let mainDiv = document.createElement("div");
//     let className = type;
//     mainDiv.classList.add(className, "message");

//     let markup = `
//             <h4>${msg.user}</h4>
//             <p>${msg.message}</p>
//         `;
//     mainDiv.innerHTML = markup;
//     messageArea.appendChild(mainDiv);
//   }

//   // Recieve messages
//   socket.on("message", (msg) => {
//     appendMessage(msg, "incoming");
//     scrollToBottom();
//   });

//   function scrollToBottom() {
//     messageArea.scrollTop = messageArea.scrollHeight;
//   }

  const { TextArea } = Input;

  return (
    <>
      <div>
        <h1>General Discussion, Hello {user}</h1>
        <div>
          <div className="">
            <TextArea rows={27} cols={30} defaultValue={textArea}/>
             
          </div>
          <div>
            <TextArea rows={1} cols={30} placeholder="Write a message..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralChat;
