import React, { useRef, useState, useEffect, useCallback } from "react";
import "./Room.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { APP_ID, SECRET } from "../../../../config";

function Room() {
  const { roomId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const zpRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [joined, setJoined] = useState(false);
  const [callType, setCallType] = useState("");

  // Memoize the myMeeting function with useCallback
  const myMeeting = useCallback(
    (type) => {
      const appID = APP_ID;
      const serverSecret = SECRET;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "Your Name"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zpRef.current = zp;

      zp.joinRoom({
        container: videoContainerRef.current,
        sharedLinks: [
          {
            name: "Video Call Link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?type=" + encodeURIComponent(type),
          },
        ],
        scenario: {
          mode:
            type === "one-on-one"
              ? ZegoUIKitPrebuilt.OneONoneCall
              : ZegoUIKitPrebuilt.GroupCall,
        },
        maxUsers: type === "one-on-one" ? 2 : 10,
        onJoinRoom: () => {
          setJoined(true);
        },
        onLeaveRoom: () => {
          navigate("/");
        },
      });
    },
    [roomId, navigate] // Dependencies for the useCallback hook
  );

  // Handle exit from the room
  const handleExit = () => {
    if (zpRef.current) {
      zpRef.current.destroy();
    }
    navigate("/");
  };

  // On component mount, extract call type from location and set it
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const type = query.get("type");

    setCallType(type); // Update state with call type
  }, [location.search]);

  // Initialize the meeting after callType is set
  useEffect(() => {
    if (callType) {
      myMeeting(callType);
    }

    // Cleanup function for component unmount
    return () => {
      if (zpRef.current) {
        zpRef.current.destroy();
      }
    };
  }, [callType, myMeeting]);

  return (
    <div className="room-container">
      {!joined && (
        <>
          <header className="room-header">
            {callType === "one-on-one"
              ? "One-on-One Video Call"
              : "Group Video Call"}
          </header>
          <button className="exit-button" onClick={handleExit}>
            Exit
          </button>
        </>
      )}
      <div ref={videoContainerRef} className="video-container" />
    </div>
  );
}

export default Room;
