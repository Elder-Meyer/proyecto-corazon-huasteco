//FORMIK Y YUP
import {useFormik} from 'formik'      
import * as Yup from "yup"
import {useNavigate} from "react-router-dom"
import {useAuth} from "../../context/AuthContext"

// eslint-disable-next-line
export const useFormikConfig = ({ setError, open, setOpen, setSnackbarOpen, setVariant }) => {

  const {login} = useAuth();
  
  const navigate = useNavigate();

  // función de login
  const handleSubmit =  async(email, password) => {
    setError("");
    try {
      setOpen(true);
      await login(email, password);
      navigate("/user/consultor");
      setOpen(false);
    } catch (err) {
      setVariant("error");
      setOpen(true);
      setError(err.code === "auth/wrong-password" ? "La contraseña es incorrecta" : "El correo electronico es incorrecto");
      setOpen(false);
      setSnackbarOpen(true)
    }
  }


  const formikBag = useFormik({
    initialValues:{
        email: "",
        password: "",
    },
    validationSchema: Yup.object({
        email: Yup.string().email().required("El email es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria")
    }),
    onSubmit: (formData)=>{
        formikBag.handleReset()
        handleSubmit(formData.email, formData.password)
    }
  });

  

  return formikBag;
};

