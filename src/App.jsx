import React, { useState } from "react";
import './App.css'; 
import SurveyForm from "./components/SurveyForm"; 
import Summary from "./components/Summary";       
import movies from "./constants/movies";
import { validateName, validateEmail, validateMovie } from "./utils/validation";

export default function App() {
  
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [errors, setErrors] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  // ฟังก์ชัน UI ของการเลือกหนัง 
  const handleChangeMovie = (e) => setSelectedOption(e.target.value);

  // ฟังก์ชันเช็คเงื่อนไขของการกรอกข้อมูลแต่ละอัน ถ้าครบก็ส่งข้อมูลได้ -> ไปหน้าถัดไป 
  function handleSubmit(event) {
    event.preventDefault();
    const okName = validateName(name, setErrors);
    const okEmail = validateEmail(email, setErrors);
    const okMovie = validateMovie(selectedOption, setErrors);
    if (okName && okEmail && okMovie) setShowSummary(true);
  }

  // รีเซ็ตค่าแบบเดิมทั้งหมด
  function handleReset() {
    setName("");              // ล้างค่าชื่อ
    setEmail("");             // ล้างค่าอีเมล
    setComment("");           // ล้างคอมเมนต์
    setSelectedOption("");    // ยกเลิกการเลือกหนัง
    setErrors({});            // ล้างข้อความ error ทั้งหมด
  }

  // เริ่มใหม่: เคลียร์ + กลับไปหน้าแบบฟอร์ม
  function handleRestart() {
    handleReset();            // เรียกฟังก์ชัน handleReset เพื่อเคลียร์ฟอร์ม คือต้องกรอกใหม่
    setShowSummary(false);    // ปิดหน้า summary -> กลับไปหน้าแบบฟอร์ม
  }

  // สลับหน้าตาม showSummary
  if (showSummary) {
    return (
      <Summary
        name={name}
        email={email}
        selectedOption={selectedOption}
        comment={comment}
        onRestart={handleRestart}
      />
    );
  }

  // หน้าแบบฟอร์ม
  return (
    <SurveyForm
      // data
      values={{ name, email, comment, selectedOption }} 
      errors={errors}
      movies={movies} // เอาตัว movies มา หน้า App ก่อน -> ส่งให้ SurveyForm

      // handlers 
      onChangeName={setName}
      onChangeEmail={setEmail}
      onChangeComment={setComment}
      onChangeMovie={handleChangeMovie}
      onSubmit={handleSubmit}
      onReset={handleReset}
    />
  );
}
