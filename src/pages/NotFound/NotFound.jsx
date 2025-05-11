import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <section>
      <h1>The page does not exist</h1>
      <p>Redirection to the main one through {seconds} sec ...</p>
    </section>
  );
};

export default NotFound;
