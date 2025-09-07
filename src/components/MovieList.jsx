import React from "react";

export default function MovieList({ movies, selectedMovie, onSelectMovie, error, required = true }) {
  return (
    <div className="mb-4 w-full max-w-md">
      <fieldset
        className={`rounded ${error ? "border border-red-500 p-3" : ""}`}
        role="radiogroup"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "movie-error" : undefined}
      >
        <legend className="font-medium mb-2">
          เลือกภาพยนตร์ที่ชอบ {required && <span className="text-red-500">*</span>}
        </legend>

        {movies.map((item) => (
          <label key={item.id ?? item.title} className="block mb-2 cursor-pointer select-none">
            <input
              type="radio"
              name="favorite-movie"
              value={item.title}
              checked={selectedMovie === item.title}
              onChange={(e) => onSelectMovie(e.target.value)}
              className="mr-2"
              required={required}
            />
            {item.title} ({item.year}) — {item.director}
          </label>
        ))}
      </fieldset>

      {error && (
        <p id="movie-error" className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
