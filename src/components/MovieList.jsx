import React from "react";

export default function MovieList({ movies, selected, onChange }) {
  return (
    <div className="mb-4 w-full max-w-md">
      <p className="font-medium mb-2">
        เลือกภาพยนตร์ที่ชอบ <span className="text-red-500">*</span>
      </p>

      {movies.map((item) => (
        <label key={item.title} className="block mb-2 cursor-pointer select-none">
          <input
            type="radio"
            name="option"
            value={item.title}
            checked={selected === item.title}
            onChange={onChange}              // ส่ง event กลับขึ้นไป
            className="mr-2"
          />
          {item.title} ({item.year}) — {item.director}
        </label>
      ))}
    </div>
  );
}
