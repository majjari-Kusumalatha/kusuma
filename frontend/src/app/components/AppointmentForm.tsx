"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

// Reusable Input Component
type FormInputProps = {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
};

function FormInput({
  name,
  placeholder,
  type = "text",
  required = false,
}: FormInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 outline-none focus:border-orange-400"
    />
  );
}

// Reusable Select Component
type FormSelectProps = {
  name: string;
  placeholder: string;
  options: string[];
  required?: boolean;
};

function FormSelect({
  name,
  placeholder,
  options,
  required = false,
}: FormSelectProps) {
  return (
    <select
      name={name}
      defaultValue=""
      required={required}
      className="w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-700 outline-none focus:border-orange-400"
    >
      <option value="" disabled>
        {placeholder}
      </option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

// Reusable Submit Button
function FormSubmitButton() {
  return (
    <button
      type="submit"
      className="w-full rounded-md bg-[#F58220] px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#E87512]"
    >
      Schedule Appointment
    </button>
  );
}

// Appointment Form Component
export default function AppointmentForm() {
  const [appointmentType, setAppointmentType] = useState("india");
  const [tabChanging, setTabChanging] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleAppointmentSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const handleAppointmentTab = (type: string) => {
    if (appointmentType === type) return;

    setTabChanging(true);
    setAppointmentType(type);

    setTimeout(() => {
      setTabChanging(false);
    }, 500);
  };

  return (
    <div className="overflow-hidden rounded-xl shadow-sm">

      {/* India / International Tabs */}
      <div className="flex items-end">

        <button
          type="button"
          role="tab"
          aria-selected={appointmentType === "india"}
          onClick={() => handleAppointmentTab("india")}
          className={`rounded-t-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
            appointmentType === "india"
              ? "bg-[#0756A3] text-white"
              : "bg-[#E5F1FF] text-[#0756A3] hover:bg-blue-100"
          }`}
        >
          India
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={appointmentType === "international"}
          onClick={() => handleAppointmentTab("international")}
          className={`rounded-t-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
            appointmentType === "international"
              ? "bg-[#0756A3] text-white"
              : "bg-[#E5F1FF] text-[#0756A3] hover:bg-blue-100"
          }`}
        >
          International
        </button>

      </div>

      {/* Form Content */}
      <div
        key={appointmentType}
        className={`bg-[#0756A3] p-5 ${
          tabChanging ? "animate-form-blink" : ""
        }`}
      >

        <h3 className="mb-4 text-base font-bold text-white">
          Get A Call From Our Experts
        </h3>

        {/* India Appointment Form */}
        {appointmentType === "india" && (
          <form
            className="space-y-3"
            onSubmit={handleAppointmentSubmit}
          >
            <FormInput
              name="name"
              placeholder="Name*"
              required
            />

            <FormInput
              name="phone"
              placeholder="Mobile Number*"
              type="tel"
              required
            />

            <FormSelect
              name="location"
              placeholder="Select Location*"
              options={["Secunderabad", "Shivaji Nagar"]}
              required
            />

            <FormSelect
              name="speciality"
              placeholder="Select Speciality*"
              options={[
                "Obstetrics & Gynaecology",
                "Pediatrics",
                "Neonatology",
                "Fertility",
              ]}
              required
            />

            <FormSelect
              name="consultation"
              placeholder="Select Consultation Type"
              options={[
                "Physical Consultation",
                "Online Consultation",
              ]}
              required
            />

            <label className="flex items-start gap-2 text-xs leading-5 text-white">
              <input
                type="checkbox"
                required
                className="mt-1 accent-orange-500"
              />

              <span>
                I agree to the Medicover{" "}
                <Link
                  href="/privacy-policy"
                  className="text-orange-300 underline"
                >
                  Privacy Policy
                </Link>{" "}
                and consent to receive SMS/WhatsApp/RCS communications.
              </span>
            </label>

            <FormSubmitButton />
          </form>
        )}

        {/* International Appointment Form */}
        {appointmentType === "international" && (
          <form
            className="space-y-3"
            onSubmit={handleAppointmentSubmit}
          >
            <FormInput
              name="internationalName"
              placeholder="Enter your full name"
              required
            />

            <FormInput
              name="internationalEmail"
              placeholder="Enter your email address"
              type="email"
              required
            />

            <FormInput
              name="whatsapp"
              placeholder="Enter WhatsApp number with country code"
              type="tel"
              required
            />

            <FormSelect
              name="country"
              placeholder="Select Your Country"
              options={[
                "United States",
                "United Kingdom",
                "United Arab Emirates",
                "Saudi Arabia",
                "Bangladesh",
                "Nepal",
                "Other",
              ]}
              required
            />

            <FormSelect
              name="internationalLocation"
              placeholder="Select Hospital Location"
              options={["Secunderabad", "Shivaji Nagar"]}
              required
            />

            <FormSelect
              name="internationalSpeciality"
              placeholder="Select Speciality"
              options={[
                "Obstetrics & Gynaecology",
                "Pediatrics",
                "Neonatology",
                "Fertility",
              ]}
              required
            />

            <FormSelect
              name="internationalConsultation"
              placeholder="Select Consultation Type"
              options={[
                "Physical Consultation",
                "Online Consultation",
              ]}
              required
            />

            <label className="flex items-start gap-2 text-xs leading-5 text-white">
              <input
                type="checkbox"
                required
                className="mt-1 accent-orange-500"
              />

              <span>
                I agree to the Medicover{" "}
                <Link
                  href="/privacy-policy"
                  className="text-orange-300 underline"
                >
                  Privacy Policy
                </Link>{" "}
                and consent to receive email/WhatsApp communications.
              </span>
            </label>

            <FormSubmitButton />

            {formSubmitted && (
              <p className="mt-3 rounded-md bg-green-100 p-3 text-sm text-green-800">
                Thank you! Your appointment request has been submitted successfully.
              </p>
            )}

          </form>
        )}

      </div>
    </div>
  );
}
