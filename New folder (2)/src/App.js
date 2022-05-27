import Header from "./components/Header";
import RoutesLib from "./RoutesLib.js";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";
function App() {
  localStorage.setItem("fav", JSON.stringify([]));
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <main>
      {isAuthenticated && <Header />}
      <RoutesLib />
    </main>
  );
}

export default App;
