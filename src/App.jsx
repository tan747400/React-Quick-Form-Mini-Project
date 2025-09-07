import React, { useState, useCallback } from "react";
import "./App.css";
import SurveyForm from "./components/SurveyForm";
import Summary from "./components/Summary";
import movies from "./constants/movies";
import {
  validateName,
  validateEmail,
  validateSelectedOption,
  validateAll,
} from "./utils/validation";

export default function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    comment: "",
    selectedOption: "",
  });
  const [errors, setErrors] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  // --- handlers: อัปเดตค่า + validate รายฟิลด์ทันทีเพื่อ UX ดีขึ้น
  const onChangeName = useCallback((v) => {
    setValues((prev) => ({ ...prev, name: v }));
    const msg = validateName(v);
    setErrors((prev) => ({ ...prev, ...(msg ? { name: msg } : { name: undefined }) }));
  }, []);

  const onChangeEmail = useCallback((v) => {
    setValues((prev) => ({ ...prev, email: v }));
    const msg = validateEmail(v);
    setErrors((prev) => ({ ...prev, ...(msg ? { email: msg } : { email: undefined }) }));
  }, []);

  const onChangeComment = useCallback((v) => {
    setValues((prev) => ({ ...prev, comment: v }));
  }, []);

  const onChangeMovie = useCallback((val) => {
    setValues((prev) => ({ ...prev, selectedOption: val }));
    const msg = validateSelectedOption(val);
    setErrors((prev) => ({ ...prev, ...(msg ? { selectedOption: msg } : { selectedOption: undefined }) }));
  }, []);

  // --- submit/reset/restart
  const handleSubmit = (e) => {
    e.preventDefault();
    // trim เก็บเข้าค่า state เพื่อให้ Summary สะอาด
    const trimmed = {
      ...values,
      name: values.name.trim(),
      email: values.email.trim(),
      comment: values.comment.trim(),
    };
    setValues(trimmed);

    const { errors: nextErrors, isValid } = validateAll(trimmed);
    setErrors(nextErrors);
    if (isValid) setShowSummary(true);
  };

  const handleReset = () => {
    setValues({ name: "", email: "", comment: "", selectedOption: "" });
    setErrors({});
  };

  const handleRestart = () => {
    handleReset();
    setShowSummary(false);
  };

  // toggle แสดง Summary ที่เดียว
  if (showSummary) {
    return (
      <Summary
        name={values.name}
        email={values.email}
        selectedOption={values.selectedOption}
        comment={values.comment}
        onRestart={handleRestart}
      />
    );
    }

  return (
    <SurveyForm
      values={values}
      errors={errors}
      movies={movies}
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangeComment={onChangeComment}
      onChangeMovie={onChangeMovie}
      onSubmit={handleSubmit}
      onReset={handleReset}
    />
  );
}
