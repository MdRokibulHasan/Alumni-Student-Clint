/* eslint-disable no-undef */
import { useEffect, useState } from "react";

const useEvent = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/event")
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      });
  }, []);
  return [event, loading];
};
export default useEvent;
