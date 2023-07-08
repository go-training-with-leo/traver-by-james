export const emailValidation= (email: string) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return regex.test(email);
};

export const passwordValidation = (password: string)=>{
  const regex = /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/i;
  return regex.test(password);
}
