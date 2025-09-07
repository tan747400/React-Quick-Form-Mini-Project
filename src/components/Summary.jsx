import React from "react";

export default function Summary({ name, email, selectedOption, comment, onRestart }) {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <section className="bg-white w-full max-w-xl rounded shadow p-6 space-y-4">
        <h1 className="text-2xl font-semibold">สรุปข้อมูลแบบสำรวจ</h1>
        <ul className="space-y-2 text-gray-700">
          <li><span className="font-medium">ชื่อ:</span> {name}</li>
          <li><span className="font-medium">อีเมล:</span> {email}</li>
          <li><span className="font-medium">ภาพยนตร์ที่เลือก:</span> {selectedOption}</li>
          {Boolean(comment?.trim()) && (
            <li><span className="font-medium">ความคิดเห็น:</span> {comment}</li>
          )}
        </ul>
        <button
          type="button"
          onClick={onRestart}
          className="mt-2 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded"
        >
          เริ่มทำแบบสำรวจใหม่
        </button>
      </section>
    </main>
  );
}
