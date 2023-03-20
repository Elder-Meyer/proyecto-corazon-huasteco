import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading</h1>;// si los archivos estan cargando mandara un mensaje de cargando

  if (!user) return <Navigate to="/acceso" />;// indica que si la sesion no existe te manga al login

  return <>{children}</>;// si todo ssale bien mandara los datos

}