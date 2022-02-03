import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          {/* info */}
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Drinking vinegar echo park direct trade austin, snackwave tofu
            humblebrag kogi plaid tbh. Pitchfork ugh cornhole banjo,
            lumbersexual la croix distillery gastropub fanny pack kogi. Neutra
            tofu hammock church-key you probably haven't heard of them PBR&B
            beard.
          </p>
          <button className="btn btn-hero">Get started</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
