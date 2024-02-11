import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import Navbars from "./component/Navbars";
import Payment from "./component/Payment";
import PaymentSuccess from "./component/PaymentSuccess"
import BookingsAndHistory from "./component/BookingsAndHistory";

function App() {
  return (
    <>
      <Routes>
<Route path="/" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/navbar" element={<Navbars/>}/>
<Route path="/payment" element={<Payment/>}/>
<Route path="/My Bookings" element={<BookingsAndHistory/>}/>

      </Routes>
      {/* <DummyLogin/> */}
    </>
  );
}

export default App;
