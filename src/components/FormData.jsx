import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormData = () => {
  const initialValues = {
    fullName: "",
    email: "",
    contact: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    contact: Yup.string()
      .matches(/^\+?[0-9]{7,14}$/, "Enter a valid phone number")
      .required("Contact/WhatsApp number is required"),
    message: Yup.string().required("Please enter your message"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    alert("Message Sent Successfully!");
    resetForm();
  };

  return (
    <div className="lg:w-[400px]  mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold  mb-6">Book Catering</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-md font-medium text-gray-700"
              >
                Full Name
              </label>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your name"
                className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter  email"
                className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Contact/WhatsApp */}
            <div>
              <label
                htmlFor="contact"
                className="block text-md font-medium text-gray-700"
              >
                Contact / WhatsApp
              </label>
              <Field
                type="text"
                id="contact"
                name="contact"
                placeholder="Enter contact number"
                className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="contact"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Purpose of Enquiry/Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-md font-medium text-gray-700"
              >
                Purpose of Enquiry / Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Enter message"
                rows="2"
                className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#376D5C]  text-white font-semibold rounded-lg shadow-md transition duration-300"
              >
                Send Message
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormData;
