import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

function Events() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      time: "",
      contact: "",
      location: "",
      eventDate: "",
      people: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      contact: Yup.string()
        .matches(/\d{10}/, "Invalid number")
        .required("Required"),
      location: Yup.string().required("Required"),
      eventDate: Yup.string().required("Required"),
      people: Yup.number().min(1, "Must be at least 1").required("Required"),
      message: Yup.string()
        .matches(/\b\w+\b(?:\s+\b\w+\b){29,39}/, "Must be 30-40 words")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col items-center bg-[#F8FAF9] py-6 px-10 md:px-10 lg:px-20">
      <div className="w-full h-full flex flex-col lg:pt-10 pt-20 gap-6 items-center">
        <p className="text-4xl font-medium">Event Details</p>
        <p className="text-zinc-500">
          Please fill in the event details & size of the order
        </p>
      </div>

      <div className="w-full max-w-2xl lg:mt-10 p-6 rounded-xl">
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Full Name & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#6B7280] mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                className="w-full p-3 border-2 border-[#7D7E7E] bg-white  rounded"
                {...formik.getFieldProps("fullName")}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
              )}
            </div>

            <div className="relative">
              <label className="block font-semibold text-[#6B7280] mb-2">
                Time
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="time"
                  placeholder="Enter event time"
                  className="w-full p-3 text-[#cacacb] border-2 border-[#7D7E7E] bg-white  rounded pr-10"
                  {...formik.getFieldProps("time")}
                />
                <FaClock className="absolute right-3 top-3 text-[#6B7280]" />
              </div>
              {formik.touched.time && formik.errors.time && (
                <p className="text-red-500 text-sm">{formik.errors.time}</p>
              )}
            </div>
          </div>

          {/* Contact & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#6B7280] mb-2">
                Contact Number
              </label>
              <input
                type="text"
                name="contact"
                placeholder="Enter your number"
                className="w-full p-3 border-2 border-[#7D7E7E] bg-white  rounded"
                {...formik.getFieldProps("contact")}
              />
              {formik.touched.contact && formik.errors.contact && (
                <p className="text-red-500 text-sm">{formik.errors.contact}</p>
              )}
            </div>
            <div className="relative">
              <label className="block font-semibold text-[#6B7280] mb-2">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  className="w-full p-3 border-2 border-[#7D7E7E] bg-white  rounded pr-10"
                  {...formik.getFieldProps("location")}
                />
                <FaMapMarkerAlt className="absolute right-3 top-3 text-[#6B7280]" />
              </div>
              {formik.touched.location && formik.errors.location && (
                <p className="text-red-500 text-sm">{formik.errors.location}</p>
              )}
            </div>
          </div>

          {/* __________event and ppl_________________ */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block font-semibold text-[#6B7280] mb-2">
                Event Date
              </label>
              <div className="relative">
                <input
                  type=""
                  name="eventDate"
                  placeholder="select your event date"
                  className="w-full p-3 border-2  border-[#7D7E7E] bg-white  rounded"
                  {...formik.getFieldProps("eventDate")}
                />
                <FaCalendarAlt className="absolute right-3 top-3 text-[#6B7280]" />
              </div>
              {formik.touched.eventDate && formik.errors.eventDate && (
                <p className="text-red-500 text-sm">
                  {formik.errors.eventDate}
                </p>
              )}
            </div>

            <div className="relative">
              <label className="block font-semibold text-[#6B7280] mb-2">
                No. of People
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="people"
                  placeholder="How many people will eat?"
                  className="w-full p-3 text-[#dfdfe0] border-2 border-[#7D7E7E] bg-white  rounded pr-10"
                  {...formik.getFieldProps("people")}
                />
                <FaUsers className="absolute right-3 top-3 text-[#6B7280]" />
              </div>
              {formik.touched.people && formik.errors.people && (
                <p className="text-red-500 text-sm">{formik.errors.people}</p>
              )}
            </div>
          </div>

          {/* Message Note */}
          <div>
            <label className="block font-semibold text-[#6B7280] mb-2">
              Message Note
            </label>
            <textarea
              name="message"
              rows="3"
              placeholder="Write a message between 30-40 words..."
              className="w-full p-3 border-2 border-[#7D7E7E] bg-white  rounded"
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
        </form>
      </div>
    </div>
  );
}

export default Events;
