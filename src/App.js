import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import CartProvider from "./provider/CartProvider";
import OrderProvider from "./provider/OrderProvider";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <OrderProvider>
            <Router />
          </OrderProvider>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
