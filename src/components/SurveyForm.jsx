import React from "react";
import MovieList from "./MovieList";

export default function SurveyForm({
  values, errors, movies,
  onChangeName, onChangeEmail, onChangeComment,
  onChangeMovie, onSubmit, onReset,
}) {
  const { name, email, comment, selectedOption } = values; // ใช้ค่าจาก props

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <form
        onSubmit={onSubmit}
        className="p-8 w-full max-w-2xl mx-auto border border-gray-200 flex flex-col items-center bg-white rounded shadow"
      >
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          แบบฟอร์มสำรวจความชอบภาพยนตร์
        </h1>

        {/* Name */}
        <div className="mb-4 w-full max-w-md">
          <label className="block mb-1 font-medium" htmlFor="name">
            ชื่อ <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={name} // ใช้ค่าจาก props
            onChange={(e) => onChangeName(e.target.value)}
            className={`w-full border px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4 w-full max-w-md">
          <label className="block mb-1 font-medium" htmlFor="email">
            อีเมล <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email} // ใช้ค่าจาก props
            onChange={(e) => onChangeEmail(e.target.value)}
            className={`w-full border px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Movies (แยกเป็นคอมโพเนนต์) */}
        <MovieList
          movies={movies}               // ใช้ค่าจาก props
          selected={selectedOption}
          onChange={onChangeMovie}
        />
        {errors.movie && <p className="text-red-500 text-sm -mt-2 mb-2">{errors.movie}</p>}

        {/* Comment */}
        <div className="mb-6 w-full max-w-md">
          <label className="block mb-1 font-medium" htmlFor="comment">
            แสดงความคิดเห็น (ไม่จำเป็น)
          </label>
          <textarea
            id="comment"
            rows="4"
            value={comment} // ใช้ค่าจาก props
            onChange={(e) => onChangeComment(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            ส่งแบบสำรวจ
          </button>
          <button type="button" onClick={onReset} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded">
            รีเซ็ต
          </button>
        </div>
      </form>
    </div>
  );
}
