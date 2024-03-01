import { ThemeProvider } from "@mui/material";
import "./App.css";
import UsersTable from "./components/UserTable/UsersTable";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UsersTable />
    </ThemeProvider>
  );
}

export default App;
