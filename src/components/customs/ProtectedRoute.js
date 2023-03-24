import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import { useState, useEffect } from "react";
import { doc, getDoc  } from "firebase/firestore";
import { db } from "../../config/firebase/firebaseDB";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Obtiene los datos del usuario desde Firestore
    const consultaDato = async () => {
      const referencia = doc(db, `usuarios/${user.uid}`); // Cambia el ID estático por user.uid
      const docSnap = await getDoc(referencia);
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("No se encontró el documento");
      }
    };

    if (user) {
      consultaDato();
    }
  }, [user]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/acceso" />;
  } else if (data === null) {
    return <div>Cargando datos del usuario...</div>;
  } else if (!(data.rol === "consultador")) {
    return <Navigate to="/inicio" />;
  } else {
    return <>{children}</>;
  }
}