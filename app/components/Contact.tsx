"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("mwpleooq");
  if (state.succeeded) {
    toast.success("Thank you for reaching out! I will contact you soon.", {
      toastId: "submit-form",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    reset();
  }
  if (state.errors) {
    toast.error(
      `An error occurred while submitting the form. Please check the details and try again.`,
      {
        toastId: "error-form",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
    reset();
  }
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[850px]">
        <SectionHeading
          title="Get in Touch"
          subtitle="Feel free to reach out for collaborations, questions, or just a friendly chat!"
        />{" "}
        <div className="flex justify-center ">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white p-6 rounded-lg shadow-xl border border-gray-300"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none bg-[#e7e7e7] border rounded-lg w-full py-2 px-3 text-[#000000] leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none bg-[#e7e7e7] border rounded-lg w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 min-h-[100px] bg-[#e7e7e7] text-black leading-tight focus:outline-none focus:shadow-outline"
                rows={5}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ${
                  state.submitting
                    ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
                }`}
                disabled={state.submitting}
              >
                {state.submitting ? "Submitting..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
