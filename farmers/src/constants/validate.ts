const validateNames = () => {
  return /^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/;
};
export default validateNames;
