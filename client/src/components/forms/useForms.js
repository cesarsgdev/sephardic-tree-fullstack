import { useState, useRef } from "react";

const useForms = () => {
  const formActive = useRef();
  const [forms, setForms] = useState(false);
  const [typeOfForm, setTypeOfForm] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleForm = (type, isEditing) => {
    setIsEditing(isEditing);

    if (type === "Principal")
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

    if (type === "Marriage")
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

    if (type === "Partner")
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

  return { formActive, forms, typeOfForm, handleForm, hide, isEditing };
};

export default useForms;
