"use client";

import { useState, type FormEvent } from "react";
import { formBudgets, formServices } from "@/data/site";

type ContactFormProps = {
  variant?: "page" | "home";
};

const FIELD_BASE =
  "w-full border-b-2 border-b-black bg-transparent py-2 font-normal text-black transition-colors duration-300 placeholder:text-[#6e6e6e] focus:border-b-brand focus:outline-none focus-visible:border-b-brand group-hover:border-b-brand";

const FIELD_CLASS = `${FIELD_BASE} text-base`;

const LABEL_CLASS =
  "mb-1 block text-lg font-semibold text-black transition-colors duration-300 group-hover:text-brand";

export function ContactForm({ variant = "page" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-4xl bg-white p-10 text-center">
        <p className="text-2xl font-bold text-gray-950">Thank you!</p>
        <p className="mt-3 text-gray-600">We&rsquo;ve received your inquiry.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7.5">
      <FormField label="Full Name" name="fullName" placeholder="Jane Cooper" />
      <div className="grid grid-cols-1 gap-7.5 lg:grid-cols-2">
        <FormField
          label="Company name"
          name="companyName"
          placeholder="Ex. Tesla Inc"
        />
        <FormField
          label="Email*"
          name="email"
          type="email"
          placeholder="You@Example.Com"
          required
        />
        <FormSelect
          label="Service required*"
          name="serviceRequired"
          options={formServices}
          placeholder="Select Your Service"
          required
        />
        <FormSelect
          label="Project budget*"
          name="projectBudget"
          options={formBudgets}
          placeholder="Select Your Range"
          required
        />
      </div>
      <div className="group">
        <label htmlFor="projectDetails" className={LABEL_CLASS.replace("mb-1 ", "")}>
          Project details*
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          required
          rows={3}
          placeholder="Tell us more about your idea"
          className={`${FIELD_BASE} resize-none text-[18px]`}
        />
      </div>
      <div>
        <button
          type="submit"
          className={`w-full cursor-pointer rounded-full bg-[#05080d] text-[20px] font-semibold text-white transition-[transform,box-shadow,opacity] duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_16px_32px_-12px_rgba(5,8,13,0.5)] disabled:cursor-not-allowed disabled:opacity-60 ${
            variant === "home"
              ? "px-4 py-2 lg:px-8 lg:py-3.5"
              : "px-8 py-3"
          }`}
        >
          Send inquiry
        </button>
      </div>
    </form>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="group">
      <label htmlFor={name} className={LABEL_CLASS}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={
          name === "email"
            ? "email"
            : name === "fullName"
              ? "name"
              : name === "companyName"
                ? "organization"
                : undefined
        }
        className={FIELD_CLASS}
      />
    </div>
  );
}

function FormSelect({
  label,
  name,
  options,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="group mt-4">
      <label htmlFor={name} className={LABEL_CLASS}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        autoComplete="off"
        className={`${FIELD_CLASS} cursor-pointer`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
