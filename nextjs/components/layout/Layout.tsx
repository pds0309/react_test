import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

type LayoutProps = {
  children: JSX.Element;
};
function Layout({ children }: LayoutProps) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

export default Layout;
