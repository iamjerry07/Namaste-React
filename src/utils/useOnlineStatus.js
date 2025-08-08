import { useState, useEffect } from "react";

const useonlineStatus = () => {
  const [onlineStatus, setOnlineStattus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", ()=>{
        setOnlineStattus(true)
    })
    window.addEventListener("offline", ()=>{
        setOnlineStattus(false)
    })
  }, []);

  return onlineStatus;
};

export default useonlineStatus;
