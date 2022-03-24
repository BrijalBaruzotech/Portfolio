import React from "react";
import { headerMenu } from "./Header";
import { useState } from "react";
import CancelIcon from "../../Images/Cancel.png";

export default function ResponsiveView() {
  const [open, setOpen] = useState(false);

  const response = () => {
    setOpen(!open);
  };

  return (
    <div className="md:hidden block flex-col fixed h-50 justify-center items-center">
      <div className="flex justify-end bg-slate-200">
        <img src={CancelIcon} alt="cancel" onClick={response}></img>
      </div>
      </div>
  );
}
