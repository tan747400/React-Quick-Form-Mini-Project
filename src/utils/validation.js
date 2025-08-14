export function validateName(name, setErrors) {
    if (name.trim() === "") {
      setErrors((prev) => ({ ...prev, name: "โปรดใส่ชื่อของคุณ" }));
      return false;
    }
    setErrors((prev) => ({ ...prev, name: "" }));
    return true;
  }
  
  export function validateEmail(email, setErrors) {
    if (email.trim() === "") {
      setErrors((prev) => ({ ...prev, email: "โปรดใส่อีเมลของคุณ" }));
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: "รูปแบบอีเมลไม่ถูกต้อง" }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: "" }));
    return true;
  }
  
  export function validateMovie(selectedOption, setErrors) {
    if (selectedOption === "") {
      setErrors((prev) => ({ ...prev, movie: "กรุณาเลือกหนังที่คุณชอบ" }));
      return false;
    }
    setErrors((prev) => ({ ...prev, movie: "" }));
    return true;
  }
