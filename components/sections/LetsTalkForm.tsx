"use client";

import React, { useState } from "react";
import { letsTalkContent } from "@/lib/content/letsTalk";
import { type Locale, t } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  age: string;
  week: string;
  comingWith: string;
  attracts: string;
  days: string[];
  active: string;
  sharing: string;
  anythingElse: string;
  consent: boolean;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  age: "",
  week: "",
  comingWith: "",
  attracts: "",
  days: [],
  active: "",
  sharing: "",
  anythingElse: "",
  consent: false,
};

export function LetsTalkForm({ locale = "en" }: { locale?: Locale } = {}) {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { form } = letsTalkContent(locale);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && name === "days") {
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev) => ({
        ...prev,
        days: checked
          ? [...prev.days, value]
          : prev.days.filter((v) => v !== value),
      }));
    } else if (type === "checkbox" && name === "consent") {
      setFormData((prev) => ({
        ...prev,
        consent: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form payload:", formData);

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="py-space-20 text-center">
        <h2 className="text-heading-s text-charcoal mb-space-4">
          {form.successMessage}
        </h2>
      </div>
    );
  }

  const baseInputClasses =
    "w-full bg-transparent border-b border-charcoal/20 py-2 text-body-m text-charcoal outline-none transition-colors focus-visible:border-forest focus-visible:ring-0 placeholder:text-charcoal/55";

  const labelClasses =
    "text-eyebrow text-charcoal block mb-1 uppercase tracking-widest";

  const legendClasses = labelClasses + " mb-space-3";

  const radioCheckboxLabelClasses =
    "text-body-m text-charcoal cursor-pointer flex items-center";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl space-y-space-8"
      noValidate={false}
    >
      {/* ABOUT YOU */}
      <fieldset className="space-y-space-4">
        <legend className={legendClasses}>
          {form.groups.aboutYou.title}
        </legend>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-4">
          {/* FIRST NAME */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-eyebrow uppercase tracking-[0.12em] text-forest mb-space-1"
            >
              {form.groups.aboutYou.fields.firstName} *
            </label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              aria-required="true"
              className={baseInputClasses}
            />
          </div>

          {/* LAST NAME */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-eyebrow uppercase tracking-[0.12em] text-forest mb-space-1"
            >
              {form.groups.aboutYou.fields.lastName} *
            </label>

            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              aria-required="true"
              className={baseInputClasses}
            />
          </div>

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="block text-eyebrow uppercase tracking-[0.12em] text-forest mb-space-1"
            >
              {form.groups.aboutYou.fields.email} *
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              className={baseInputClasses}
            />
          </div>

          {/* PHONE */}
          <div>
            <label
              htmlFor="phone"
              className="block text-eyebrow uppercase tracking-[0.12em] text-forest mb-space-1"
            >
              {form.groups.aboutYou.fields.phone}
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={baseInputClasses}
            />
          </div>

          {/* COUNTRY */}
          <div className="md:col-span-2">
            <label
              htmlFor="country"
              className="block text-eyebrow uppercase tracking-[0.12em] text-forest mb-0"
            >
              {form.groups.aboutYou.fields.country} *
            </label>

            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              aria-required="true"
              className={baseInputClasses}
            />
          </div>

        </div>
      </fieldset>

{/* QUESTIONNAIRE INTRO */}
<div className="mt-0 mb-space-2">
  <p className="text-body-m text-[#173D2A] italic text-left max-w-2xl mx-auto">{t(locale, "We invite you to answer the questionnaire below, which is entirely optional. It is only intended to help us understand if REFUGE61 is right for you.")}</p>
</div>

      {/* AGE */}
      <fieldset className="space-y-space-3">
        <legend className={legendClasses}>
          {form.groups.age.title}
        </legend>

        <div className="space-y-2">
          {form.groups.age.options.map((option, i) => (
            <div key={i} className="flex items-center">
              <input
                type="radio"
                id={`age-${i}`}
                name="age"
                value={option}
                checked={formData.age === option}
                onChange={handleChange}
                className="mr-3 h-4 w-4 text-forest focus:ring-forest border-charcoal/20"
              />

              <label
                htmlFor={`age-${i}`}
                className={radioCheckboxLabelClasses}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* WHICH WEEK */}
      <fieldset className="space-y-space-3">
        <legend className={legendClasses}>
          {form.groups.week.title}
        </legend>

        <div className="space-y-2">
          {form.groups.week.options.map((option, i) => (
            <div key={i} className="flex items-center">
              <input
                type="radio"
                id={`week-${i}`}
                name="week"
                value={option}
                checked={formData.week === option}
                onChange={handleChange}
                className="mr-3 h-4 w-4 text-forest focus:ring-forest border-charcoal/20"
              />

              <label
                htmlFor={`week-${i}`}
                className={radioCheckboxLabelClasses}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* WHO WOULD YOU BE COMING WITH? */}
      <fieldset className="space-y-space-3">
        <legend className={legendClasses}>
          {form.groups.comingWith.title}
        </legend>

        <div className="space-y-2">
          {form.groups.comingWith.options.map((option, i) => (
            <div key={i} className="flex items-center">
              <input
                type="radio"
                id={`comingWith-${i}`}
                name="comingWith"
                value={option}
                checked={formData.comingWith === option}
                onChange={handleChange}
                className="mr-3 h-4 w-4 text-forest focus:ring-forest border-charcoal/20"
              />

              <label
                htmlFor={`comingWith-${i}`}
                className={radioCheckboxLabelClasses}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* WHAT ATTRACTS YOU */}
      <fieldset className="space-y-space-3">
        <legend className={legendClasses}>
          {form.groups.attracts.title} *
        </legend>

        <label htmlFor="attracts" className="sr-only">
          {form.groups.attracts.title} *
        </label>

        <p className="text-body-m text-charcoal/70 -mt-space-2">
          {form.groups.attracts.helpText}
        </p>

        <textarea
          id="attracts"
          name="attracts"
          rows={2}
          value={formData.attracts}
          onChange={handleChange}
          required
          aria-required="true"
          className={baseInputClasses + " resize-y"}
        />
      </fieldset>

      {/* HOW DO YOU IMAGINE YOUR DAYS */}
      <fieldset className="space-y-space-3">
        <legend className={legendClasses}>
          {form.groups.days.title}
        </legend>

        <p className="text-body-m text-charcoal/70 -mt-space-2">
          {form.groups.days.helpText}
        </p>

        <div className="space-y-2">
          {form.groups.days.options.map((option, i) => (
            <div key={i} className="flex items-center">
              <input
                type="checkbox"
                id={`days-${i}`}
                name="days"
                value={option}
                checked={formData.days.includes(option)}
                onChange={handleChange}
                className="mr-3 h-4 w-4 text-forest focus:ring-forest border-charcoal/20 rounded-none"
              />

              <label
                htmlFor={`days-${i}`}
                className={radioCheckboxLabelClasses}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* HOW ACTIVE */}
      <fieldset className="space-y-space-3">
        <legend className={legendClasses}>
          {form.groups.active.title}
        </legend>

        <div className="space-y-2">
          {form.groups.active.options.map((option, i) => (
            <div key={i} className="flex items-center">
              <input
                type="radio"
                id={`active-${i}`}
                name="active"
                value={option}
                checked={formData.active === option}
                onChange={handleChange}
                className="mr-3 h-4 w-4 text-forest focus:ring-forest border-charcoal/20"
              />

              <label
                htmlFor={`active-${i}`}
                className={radioCheckboxLabelClasses}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* SHARING — removed 2026-08-20 */}

      {/* ANYTHING ELSE */}
      <fieldset className="space-y-space-3">
        <legend className={legendClasses}>
          {form.groups.anythingElse.title}
        </legend>

        <label htmlFor="anythingElse" className="sr-only">
          {form.groups.anythingElse.title}
        </label>

        <p className="text-body-m text-charcoal/70 -mt-space-2">
          {form.groups.anythingElse.helpText}
        </p>

        <textarea
          id="anythingElse"
          name="anythingElse"
          rows={2}
          value={formData.anythingElse}
          onChange={handleChange}
          className={baseInputClasses + " resize-y"}
        />
      </fieldset>

      {/* PRIVACY */}
      <fieldset>
        <legend className={legendClasses}>{t(locale, "PRIVACY")}</legend>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            aria-required="true"
            className="mr-3 mt-1 h-4 w-4 text-forest focus:ring-forest border-charcoal/20 rounded-none"
          />

          <label
            htmlFor="consent"
            className="text-body-m text-charcoal"
          >
            I agree that REFUGE61 may use the information provided in this
            form to respond to my enquiry and contact me about a possible
            stay. I have read the{" "}
            <a
              href="/privacy-policy"
              className="underline hover:text-forest focus-visible:ring-2 focus-visible:ring-forest focus-visible:outline-none"
            >{t(locale, "Privacy Policy")}</a>
            .
          </label>
        </div>
      </fieldset>

      {/* SUBMIT BUTTON */}
      <div className="flex flex-col items-center sm:items-start">
        <Button type="submit" variant="primary">
          {form.submit.button}
        </Button>

        <p className="mt-space-4 text-body-m text-charcoal max-w-lg">
          {form.submit.note}
        </p>
      </div>
    </form>
  );
}
