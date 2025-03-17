import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Listing from "./Page/Listing";
import Answers from "./Page/Answers";

export default function App() {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/answers" element={<Answers />} />
      </Routes>
      <NavBar />
    </>
  );
}
function NavBar() {
  return (
    <div className="nav-bar fixed d-flex a-center j-center gap-20">
      <Link to={""} className="bold">
        Home
      </Link>{" "}
      |
      <Link to={"/answers"} className="bold">
        Answers
      </Link>
    </div>
  );
}
