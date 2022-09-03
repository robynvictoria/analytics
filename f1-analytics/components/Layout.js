import MainMenu from "./MainMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <MainMenu>
        <main>{children}</main>
      </MainMenu>
    </div>
  );
};

export default Layout;
