export function validateName(name) {
  const v = (name ?? "").trim();
  if (v === "") return "โปรดใส่ชื่อของคุณ";
  return "";
}

export function validateEmail(email) {
  const v = (email ?? "").trim();
  if (v === "") return "โปรดใส่อีเมลของคุณ";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(v)) return "รูปแบบอีเมลไม่ถูกต้อง";
  return "";
}

export function validateSelectedOption(selectedOption) {
  if (!selectedOption) return "โปรดเลือกภาพยนตร์ 1 เรื่อง";
  return "";
}

// ตรวจทั้งหมดครั้งเดียวตอน submit
export function validateAll(values) {
  const errors = {
    name: validateName(values.name),
    email: validateEmail(values.email),
    selectedOption: validateSelectedOption(values.selectedOption),
  };

  // ลบ key ที่ไม่มี error เพื่อให้ state สะอาด
  Object.keys(errors).forEach((k) => {
    if (!errors[k]) delete errors[k];
  });

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}