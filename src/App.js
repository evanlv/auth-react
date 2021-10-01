import { AuthProvider } from "./context/AuthContext";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <AuthProvider>
      <Home />;
    </AuthProvider>
  );
};

export default App;
