import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../rtk/slices/adminSlice.js";

const BookedEvents = () => {
  const { loading, events } = useSelector((slice) => slice.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  if (loading) {
    return (
      <div className="flex flex-wrap gap-10 px-24 bg-zinc-300 min-h-screen items-center justify-center">
        loading.....
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-10 px-24 bg-zinc-300 min-h-screen">
      <h1 className="text-3xl text-center w-full py-4 mb-20"> Booked Events</h1>
      {events.map((item, idx) => (
        <div
          key={idx}
          className="flex relative flex-col p-5 h-fit border rounded-xl  gap-5 items-start justify-center text-white bg-zinc-800"
        >
          <div className="absolute p-2 w-8 h-8 flex items-center justify-center rounded-full top-2 right-2 bg-zinc-950 text-white">
            {idx + 1}
          </div>
          <div className="flex  gap-4 items-center">
            {" "}
            <label className="font-semibold "> Name : </label>
            <h1 className="text-zinc-300">{item.fullName}</h1>
          </div>
          <div className="flex  gap-4 items-center">
            {" "}
            <label className="font-semibold "> Time : </label>
            <h1 className="text-zinc-300">{item.time}</h1>
          </div>
          <div className="flex  gap-4 items-center">
            {" "}
            <label className="font-semibold "> Location : </label>
            <h1 className="text-zinc-300">{item.location}</h1>
          </div>
          <div className="flex  gap-4 items-center">
            {" "}
            <label className="font-semibold "> Contact : </label>
            <h1 className="text-zinc-300">{item.contact}</h1>
          </div>
          <div className="flex  gap-4 items-center">
            {" "}
            <label className="font-semibold "> Date : </label>
            <h1 className="text-zinc-300">{item.eventDate}</h1>
          </div>
          <div className="flex  gap-4 items-center">
            {" "}
            <label className="font-semibold "> Peoples : </label>
            <h1 className="text-zinc-300">{item.people}</h1>
          </div>
          <div className="flex  gap-4 items-center">
            {" "}
            <label className="font-semibold "> Message : </label>
            <h1 className="text-zinc-300">{item.message}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookedEvents;
