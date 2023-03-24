//FORMIK Y YUP
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../config/firebase/firebaseDB";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
// eslint-disable-next-line
export const useFormikConfig = ({
  setError,
  open,
  setOpen,
  setSnackbarOpen,
  setVariant,
}) => {
  const { login } = useAuth();
  // eslint-disable-next-line
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const handleSubmit = async (email, pass) => {
    setError("");
    setOpen(true);
    const referencia = doc(db, `usuarios_correo/${email}`);
    const docSnap = await getDoc(referencia);
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (!(data.password === pass)) {
        try {
          await login(email, pass);
          navigate("/user/consultor");
          await updateDoc(referencia, {
            repeatPassword: pass,
          });
          setOpen(false);
        } catch (err) {
          setVariant("error");
          setOpen(true);
          setError("La contraseña es incorrecta");
          setOpen(false);
          setSnackbarOpen(true);
        }
      } else {
        setOpen(true);
        await login(email, data.repeatPassword);
        if (data.rol === "consultador") {
          navigate("/user/consultor");
        }
        else if (data.rol === "administrador") {
          navigate("/user/administrador");
        }
        else if (data.rol === "colaborador") {
          navigate("/user/colaborador");
        }
        else if (data.rol === "supervisor") {
          navigate("/user/supervisor");
        }
        setOpen(false);
        setData(data);
      }
    } else {
      setVariant("error");
      setError("El correo no existe");
      setSnackbarOpen(true);
    }
  };

  const formikBag = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("El email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: (formData) => {
      formikBag.handleReset();
      handleSubmit(formData.email, formData.password);
    },
  });

  return formikBag;
};
