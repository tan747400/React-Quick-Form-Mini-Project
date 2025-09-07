import React from "react";

export default function FormField({
  id,
  label,
  required = false,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="mb-4 w-full max-w-md">
      <label className="block mb-1 font-medium" htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full border px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
