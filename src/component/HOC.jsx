import Navs from "./Navs"

const HOC = ({ children, HeaderTitle = "Kalpataru", navbar=true}) => {
  return (
    <>
      <title>{HeaderTitle}</title>
      {navbar && <Navs/>}

      {children}
    </>
  );
};

export default HOC;
