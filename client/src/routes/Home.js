import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is home!</h1>
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
