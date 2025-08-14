import React from "react";

export default function Form({
  values, errors, movies, showSummary,
  onChangeName, onChangeEmail, onChangeComment,
  onChangeMovie, onSubmit, onReset, onRestart,
}) {
  
  const { name, email, comment, selectedOption } = values;

  // Summary page
  if (showSummary) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
        <div className="bg-white w-full max-w-xl rounded shadow p-6 space-y-4">
          <h2 className="text-2xl font-semibold">สรุปข้อมูลแบบสำรวจ</h2>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-medium">ชื่อ:</span> {name}</li>
            <li><span className="font-medium">อีเมล:</span> {email}</li>
            <li><span className="font-medium">ภาพยนตร์ที่เลือก:</span> {selectedOption}</li>
            {comment.trim() !== "" && <li><span className="font-medium">ความคิดเห็น:</span> {comment}</li>}
          </ul>
          <button onClick={onRestart} className="mt-2 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded">
            เริ่มทำแบบสำรวจใหม่
          </button>
        </div>
      </div>
    );
  }

  // Form page
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <form onSubmit={onSubmit} className="p-8 w-full max-w-2xl mx-auto border border-gray-200 flex flex-col items-center bg-white rounded shadow">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">แบบฟอร์มสำรวจความชอบภาพยนตร์</h1>

        {/* Name */}
        <div className="mb-4 w-full max-w-md">
          <label className="block mb-1 font-medium" htmlFor="name">ชื่อ <span className="text-red-500">*</span></label>
          <input
            id="name" type="text" value={name} placeholder="กรอกชื่อของคุณ"
            onChange={(e) => onChangeName(e.target.value)}
            className={`w-full border px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4 w-full max-w-md">
          <label className="block mb-1 font-medium" htmlFor="email">อีเมล <span className="text-red-500">*</span></label>
          <input
            id="email" type="email" value={email} placeholder="กรอกอีเมลของคุณ"
            onChange={(e) => onChangeEmail(e.target.value)}
            className={`w-full border px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Movies */}
        <div className="mb-4 w-full max-w-md">
          <p className="font-medium mb-2">เลือกภาพยนตร์ที่ชอบ <span className="text-red-500">*</span></p>
          {movies.map((item) => (
            <label key={item.title} className="block mb-2 cursor-pointer select-none">
              <input
                type="radio" name="option" value={item.title}
                checked={selectedOption === item.title}
                onChange={onChangeMovie}
                className="mr-2"
              />
              {item.title} ({item.year}) — {item.director}
            </label>
          ))}
          {errors.movie && <p className="text-red-500 text-sm mt-1">{errors.movie}</p>}
        </div>

        {/* Comment */}
        <div className="mb-6 w-full max-w-md">
          <label className="block mb-1 font-medium" htmlFor="comment">แสดงความคิดเห็น (ไม่จำเป็น)</label>
          <textarea
            id="comment" rows="4" value={comment} placeholder="อยากเล่าอะไรเพิ่มเติมเกี่ยวกับหนังเรื่องนี้ไหม?"
            onChange={(e) => onChangeComment(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">ส่งแบบสำรวจ</button>
          <button type="button" onClick={onReset} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded">รีเซ็ต</button>
        </div>
      </form>
    </div>
  );
}
