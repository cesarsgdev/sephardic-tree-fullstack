import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Loader whatsLoading="trees"></Loader> */}
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login", { replace: true });
        }}
      >
        Logoout
      </button>
    </>
  );
};

export default Home;
