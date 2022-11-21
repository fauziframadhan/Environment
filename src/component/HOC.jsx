const HOC = ({ children, HeaderTitle = "Kalpataru" }) => {
  return (
    <>
      <title>{HeaderTitle}</title>
      {children}
    </>
  );
};

export default HOC;
