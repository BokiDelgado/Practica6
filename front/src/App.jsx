import * as React from "react";
import Login from "./pages/Login";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import Tasks from "./pages/Tasks";
function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <Login/>
      <Tasks/>
    </NextUIProvider>
  );
}
export default App;