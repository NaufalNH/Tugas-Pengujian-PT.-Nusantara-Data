import LoginPage from "@/components/pages/login";
import Wrapper from "@/components/auth/authWrapper";

const Home = () => {
  return (
    <Wrapper >
      <div className="">
        <LoginPage />
      </div>
    </Wrapper>
  );
}

export default Home