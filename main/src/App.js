import "./App.css"
import NavBar from "./navBar/NavBar.js";
import AllRoutes from "./AllRoutes";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <NavBar />
        <main>
          <AllRoutes />
        </main>
      </UserContextProvider>
    </div>
  );
}

export default App;