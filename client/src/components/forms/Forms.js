import { useState, useEffect, forwardRef } from "react";
import PersonForm from "./PersonForm";
import MarriageForm from "./MarriageForm";

const Forms = forwardRef(({ type }, ref) => {
  return (
    <>
      {type === "Principal" && <PersonForm ref={ref} type={type} />}
      {type === "Partner" && <PersonForm ref={ref} type={type} />}
      {type === "Marriage" && <MarriageForm ref={ref} type={type} />}
    </>
  );
});

export default Forms;
