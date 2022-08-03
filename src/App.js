import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import AddService from './components/AddService/AddService';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Header></Header>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="/placeOrder" element={
                <PrivateRoute>
                  <PlaceOrder></PlaceOrder>
                </PrivateRoute>
              } />

              <Route path='/placeOrder/:id' element={
                <PrivateRoute>
                  <PlaceOrder></PlaceOrder>
                </PrivateRoute>
              }
              />

              <Route path="/services/addService" element={<AddService />} />

              <Route path="/login" element={<Login />} />

              <Route path="/myOrders" element={<MyOrders />} />

              <Route path="/manageAllOrders" element={<ManageAllOrders />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
