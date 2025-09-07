import React from "react";
import FormField from "./FormField";
import MovieList from "./MovieList";

export default function SurveyForm({
  values, errors, movies,
  onChangeName, onChangeEmail, onChangeComment,
  onChangeMovie, onSubmit, onReset,
}) {
  const { name, email, comment, selectedOption } = values;

  const canSubmit =
    !errors.name &&
    !errors.email &&
    !errors.selectedOption &&
    name.trim() !== "" &&
    email.trim() !== "" &&
    Boolean(selectedOption);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <form
        onSubmit={onSubmit}
        noValidate
        className="p-8 w-full max-w-2xl mx-auto border border-gray-200 flex flex-col items-center bg-white rounded shadow"
      >
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          แบบฟอร์มสำรวจความชอบภาพยนตร์
        </h1>

        <FormField
          id="name"
          label="ชื่อ"
          required
          value={name}
          onChange={onChangeName}
          placeholder="กรอกชื่อของคุณ"
          error={errors.name}
        />

        <FormField
          id="email"
          type="email"
          label="อีเมล"
          required
          value={email}
          onChange={onChangeEmail}
          placeholder="กรอกอีเมลของคุณ"
          error={errors.email}
        />

        <MovieList
          movies={movies}
          selectedMovie={selectedOption}
          onSelectMovie={onChangeMovie}
          error={errors.selectedOption}
          required
        />

        <div className="mb-6 w-full max-w-md">
          <label className="block mb-1 font-medium" htmlFor="comment">
            แสดงความคิดเห็น (ไม่จำเป็น)
          </label>
          <textarea
            id="comment"
            rows={4}
            value={comment}
            onChange={(e) => onChangeComment(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={!canSubmit}
            className={`px-6 py-2 rounded text-white ${
              canSubmit ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"
            }`}
          >
            ส่งแบบสำรวจ
          </button>
          <button
            type="button"
            onClick={onReset}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded"
          >
            รีเซ็ต
          </button>
        </div>
      </form>
    </div>
  );
}
