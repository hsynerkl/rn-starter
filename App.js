import RoutesComponent from "./src/routes";
import { AuthContextProvider } from "./src/context/Auth";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <RoutesComponent />
      </AuthContextProvider>
    </>
  );
}
