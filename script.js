const Footer = () => {
  return <h1>Footer</h1>;
};

const Header = () => {
  return (
    <div className="header">
      <h1>Hello World</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <Header />
    <Footer />
  </div>
);
