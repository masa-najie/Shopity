import React from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const useTogglePassword = ():[React.FC,string] => {
  const [visible, setVisible] = useState(false);
  const dataType :string= visible ? "text" : "password";
  const Icon :React.FC= () => {
    return (
      <span
        onClick={() => {
          setVisible(!visible);
        }}
        className="absolute right-4 top-5 cursor-pointer"
      >
        {visible ? <FaRegEyeSlash /> : <FaRegEye />}
      </span>
    );
  };
  return [Icon, dataType];
};
export default useTogglePassword;
