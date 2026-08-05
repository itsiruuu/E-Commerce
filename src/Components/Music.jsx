import React, { useEffect, useState } from "react";
import MusicImage from "../assets/Categoriesbox.png";

function Music() {
  const [timer, setTimer] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (num) => {
    return num < 10 ? "0" + num : num;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-black text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-14 gap-10">

        <div className="flex-1">
          <p className="text-green-400 font-semibold mb-5">
            Categories
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold mb-8">
            Enhance Your
            <br />
            Music Experience
          </h2>

          <div className="flex gap-4 flex-wrap mb-10">

            <div className="bg-white text-black w-16 h-16 rounded-full flex flex-col justify-center items-center">
              <h3 className="font-bold">{pad(timer.days)}</h3>
              <p className="text-xs">Days</p>
            </div>

            <div className="bg-white text-black w-16 h-16 rounded-full flex flex-col justify-center items-center">
              <h3 className="font-bold">{pad(timer.hours)}</h3>
              <p className="text-xs">Hours</p>
            </div>

            <div className="bg-white text-black w-16 h-16 rounded-full flex flex-col justify-center items-center">
              <h3 className="font-bold">{pad(timer.minutes)}</h3>
              <p className="text-xs">Minutes</p>
            </div>

            <div className="bg-white text-black w-16 h-16 rounded-full flex flex-col justify-center items-center">
              <h3 className="font-bold">{pad(timer.seconds)}</h3>
              <p className="text-xs">Seconds</p>
            </div>

          </div>

          <button className="bg-green-500 hover:bg-green-600 px-10 py-3 rounded">
            Buy Now!
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={MusicImage}
            alt="Speaker"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Music;