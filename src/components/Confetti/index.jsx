import React, { useEffect } from "react";
import Confetti from "react-confetti";

const Congratulation = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
    
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Confetti />
    </div>
  );
};

export default Congratulation;
