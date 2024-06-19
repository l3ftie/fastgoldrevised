"use client";
import React, { useState } from "react";

interface FormData {
  fullName: string;
  location: string;
  email: string;
  phone: string;
  enquiry: string;
}

const initialFormData: FormData = {
  fullName: "",
  location: "",
  email: "",
  phone: "",
  enquiry: "",
};

const ContactForm = () => {
  const [values, setValues] = useState<FormData>(initialFormData);
  const [formError, setFormError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormError(false);
    const { name, value } = e.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(values).every((value) => value.trim() !== "")) {
      setFormError(false);
    } else {
      setFormError(true);
    }
  };

  return (
    <form className="my-3 bg-stone-600/30 p-4 rounded-md border border-slate-500" onSubmit={handleSubmit}>
      <p className="text-xl mb-4">Contact us on the following form you purchase</p>
      {formError && <p className="text-red-500 font-semibold">Please fill out all fields.</p>}
      <div className="flex flex-col gap-2 mb-3">
        <label className="font-semibold text-gray-50 text-sm" htmlFor="fullName">
          Full Name:
        </label>
        <input
          className="px-2 py-3 text-gray-600"
          type="text"
          name="fullName"
          id="fullName"
          value={values.fullName}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label className="font-semibold text-gray-50 text-sm" htmlFor="location">
          Location:
        </label>
        <input
          className="px-2 py-3 text-gray-600"
          type="text"
          name="location"
          id="location"
          value={values.location}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-2 mb-3">
        <label className="font-semibold text-gray-50 text-sm" htmlFor="email">
          Email:
        </label>
        <input
          className="px-2 py-3 text-gray-600"
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-2 mb-3">
        <label className="font-semibold text-gray-50 text-sm" htmlFor="phone">
          Phone:
        </label>
        <input
          className="px-2 py-3 text-gray-600"
          type="tel"
          name="phone"
          id="phone"
          value={values.phone}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-2 mb-3">
        <label className="font-semibold text-gray-50 text-sm" htmlFor="enquiry">
          Enquiry:
        </label>
        <textarea
          className="px-2 py-3 text-gray-600"
          name="enquiry"
          id="enquiry"
          value={values.enquiry}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <button
        className="w-full bg-yellow-400 p-4 lg:px-6 lg:py-3 lg:w-fit text-black hover:bg-yellow-200 font-semibold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
