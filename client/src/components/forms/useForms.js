import { useState, useRef } from "react";

const useForms = () => {
  const formActive = useRef();
  const [forms, setForms] = useState(false);
  const [typeOfForm, setTypeOfForm] = useState("");

  const handleForm = () => {
    if (formActive.current && formActive.current.id !== "Principal") {
      setForms(false);
      setTimeout(() => {
        setTypeOfForm("Principal");
        setForms(true);
      }, 250);
    } else {
      if (!forms) {
        setTypeOfForm("Principal");
        setForms(true);
      }
    }

    if (formActive.current && formActive.current.id !== "Marriage") {
      setForms(false);
      setTimeout(() => {
        setTypeOfForm("Marriage");
        setForms(true);
      }, 250);
    } else {
      if (!forms) {
        setTypeOfForm("Marriage");
        setForms(true);
      }
    }

    if (formActive.current && formActive.current.id !== "Partner") {
      setForms(false);
      setTimeout(() => {
        setTypeOfForm("Partner");
        setForms(true);
      }, 250);
    } else {
      if (!forms) {
        setTypeOfForm("Partner");
        setForms(true);
      }
    }
  };

  const hide = () => {
    setForms(false);
  };

  return { formActive, forms, typeOfForm, handleForm, hide };
};

export default useForms;
