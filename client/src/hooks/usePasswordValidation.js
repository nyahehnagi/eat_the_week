import { useState, useEffect } from "react";

export const usePasswordValidation = ({
  
password = "",
//secondPassword = "",
requiredLength = 8,
  
}) => {
const [validLength, setValidLength] = useState(null);
const [hasNumber, setHasNumber] = useState(null);
const [upperCase, setUpperCase] = useState(null);
const [lowerCase, setLowerCase] = useState(null);
//const [specialChar, setSpecialChar] = useState(null);
//const [match, setMatch] = useState(null);
  
useEffect(() => {
  
setValidLength(password.length >= requiredLength ? true : false);
setUpperCase(password.toLowerCase() !== password);
setLowerCase(password.toUpperCase() !== password);
setHasNumber(/\d/.test(password));
//setMatch(firstPassword && firstPassword === secondPassword);
//setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));

// }, [firstPassword, secondPassword, requiredLength]);
}, [password, requiredLength]);
  
//return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
return [validLength, hasNumber, upperCase, lowerCase];
};