import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Home";
import ReservationLanding from "./components/landing/Reservation";
import Testimoni from "./components/landing/Testimoni";
// import ContactUs from "./components/landing/ContactUs";
import AboutUs from "./components/landing/AboutUs";
import SRQTest from "./components/tes/SRQTest";
import Register from "./components/Register";
import Login from "./components/Login";
import { AdminAuthProvider } from './components/admin/AdminAuthContext';
import { PartisipanAuthProvider } from './components/Partisipan/PartisipanAuthContext';
import Admin from "./components/admin/Admin";
import AdminLogin from "./components/admin/AdminLogin";
import AdminRegister from "./components/admin/AdminRegister";
import AdminProfile from "./components/admin/AdminProfile";
import EditAdmin from "./components/admin/EditAdmin";
import Partisipan from "./components/Partisipan/Partisipan";
import PartisipanLogin from "./components/Partisipan/PartisipanLogin";
import PartisipanRegister from "./components/Partisipan/PartisipanRegister";
import PartisipanProfile from "./components/Partisipan/PartisipanProfile";
import EditPartisipan from "./components/Partisipan/EditPartisipan";

import User from "./components/user/User";
import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser";
import Psikolog from "./components/psikolog/Psikolog";
import AddPsikolog from "./components/psikolog/AddPsikolog";
import EditPsikolog from "./components/psikolog/EditPsikolog";
import KategoriTest from "./components/kategoritest/KategoriTest";
import AddKategori from "./components/kategoritest/AddKategori";
import EditKategori from "./components/kategoritest/EditKategori";
import Kuisioner from "./components/Kuisioner/Kuisioner";
import AddKuisioner from "./components/Kuisioner/AddKuisioner";
import EditKuisioner from "./components/Kuisioner/EditKuisioner";
import PsikologList from "./components/landing/PsikologList";
import DailyInsight from "./components/dailyinsight/DailyInsight";
import AddDailyInsight from "./components/dailyinsight/AddDailyInsight";
import EditDailyInsight from "./components/dailyinsight/EditDailyInsight";
import Review from "./components/reviews/Review";
import AddReview from "./components/reviews/AddReview";
import EditReview from "./components/reviews/EditReview";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import DailyInsightUser from "./components/dailyinsight/DailyInsightUser";
// import Contact from "./components/contact/Contact";
// import AddContact from "./components/contact/AddContact";
// import EditContact from "./components/contact/EditContact";



function App() {
  return (
    <Router>
      <Switch>
        {/* HOME */}
        <Route exact path="/">
          <Landing />
        </Route>
        {/* <Route path="/reserv-user">
          <ReservationLanding />
        </Route>
        <Route path="/testimoni">
          <Testimoni />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route> */}
        <Route path="/about-us">
          <AboutUs />
        </Route>
        

        {/* AUTH */}
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Login />
        </Route>

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

       {/* ADMIN */}
       <Route exact path="/admin">
          <AdminAuthProvider>
            <Admin />
          </AdminAuthProvider>
        </Route>
        <Route exact path="/admin/register">
          <AdminRegister />
        </Route>
        <Route exact path="/admin/login">
          <AdminAuthProvider>
            <AdminLogin />
          </AdminAuthProvider>
        </Route>
        <AdminAuthProvider>
        <Route exact path="/admin/profile">
          <AdminProfile />
        </Route>
      </AdminAuthProvider>
        <Route exact path="/admin/edit/:id">
          <EditAdmin />
        </Route>

         {/* PARTISIPAN */}
       <Route exact path="/partisipan">
          <PartisipanAuthProvider>
            <Partisipan />
          </PartisipanAuthProvider>
        </Route>
        <Route exact path="/partisipan/register">
          <PartisipanRegister />
        </Route>
        <Route exact path="/partisipan/login">
          <PartisipanAuthProvider>
            <AdminLogin />
          </PartisipanAuthProvider>
        </Route>
        <PartisipanAuthProvider>
        <Route exact path="/partisipan/profile">
          <AdminProfile />
        </Route>
      </PartisipanAuthProvider>
        <Route exact path="/partisipan/edit/:id">
          <EditAdmin />
        </Route>



        {/* USER */}
        <Route exact path="/users">
          <User />
        </Route>
        <Route exact path="/users/add">
          <AddUser />
        </Route>
        <Route exact path="/users/edit/:id">
          <EditUser />
        </Route>

        {/* MENTALWELLTEST */}
        <Route exact path="/mentalwelltest-user">
          <SRQTest />
        </Route>

        {/* PSIKOLOG */}
        <Route exact path="/psikolog">
          <Psikolog />
        </Route>
        <Route exact path="/psikolog/add">
          <AddPsikolog />
        </Route>
        <Route exact path="/psikolog/edit/:id">
          <EditPsikolog />
        </Route>
        <Route exact path="/psikolog-list">
          <PsikologList />
        </Route>

        {/* Kategori Test */}
        <Route exact path="/kategoritest">
          <KategoriTest />
        </Route>
        <Route exact path="/kategoritest/add">
          <AddKategori />
        </Route>
        <Route exact path="/kategoritest/edit/:id">
          <EditKategori />
        </Route>
        {/* <Route exact path="/psikolog-list">
          <PsikologList />
        </Route> */}

        {/*  Kuisioner */}
        <Route exact path="/kuisioner">
          <Kuisioner />
        </Route>
        <Route exact path="/kuisioner/add">
          <AddKuisioner />
        </Route>
        <Route exact path="/kuisioner/edit/:id">
          <EditKuisioner />
        </Route>
        {/* <Route exact path="/psikolog-list">
          <PsikologList />
        </Route> */}


        {/* DAILYINSIGHT */}
        <Route exact path="/dailyinsight">
          <DailyInsight />
        </Route>
        <Route exact path="/dailyinsight/add">
          <AddDailyInsight />
        </Route>
        <Route exact path="/dailyinsight/edit/:id">
          <EditDailyInsight />
        </Route>
        <Route exact path="/dailyinsight-user">
          <DailyInsightUser />
        </Route>

        {/* REVIEW */}
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/review/add">
          <AddReview />
        </Route>
        <Route exact path="/review/edit/:id">
          <EditReview />
        </Route>

        {/* MESSAGE */}
        {/* <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/contact/add">
          <AddContact />
        </Route>
        <Route exact path="/contact/edit/:id">
          <EditContact />
        </Route> */}

        
      </Switch>
    </Router>
  );
}

export default App;
