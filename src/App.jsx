import AuthProvider from "./Auth/AuthProvider"
import Router from "./app/router";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
      
  );
}

export default App;