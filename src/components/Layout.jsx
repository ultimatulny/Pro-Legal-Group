import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Leadership } from "./Leadeship";
import { Tabs } from "./Tabs";
import { corporationTabData, privateClientsTabData } from "../data/tabsData";
import { AboutUsMobile } from "./AboutUsMobile";
import { OurMissionMobile } from "./OurMissionMobile";

const Layout = () => {
  const locaton = useLocation();
  const currentPath = locaton.pathname;
  let componentToRender;

  let backgroundImageClass = "mainWrapper";
  let triangleClass = "triangleWrapper";

  if (currentPath === "/leadership") {
    componentToRender = <Leadership />;
    triangleClass = "photoLeadership leadershipGreyBackground";
  } else if (currentPath === "/clients") {
    backgroundImageClass += " privateClientsPage";
    triangleClass = "hideTriangleWrapper";
    componentToRender = <Tabs data={privateClientsTabData} />;
  } else if (currentPath === "/corporations") {
    backgroundImageClass += " corporationsPage";
    triangleClass = "hideTriangleWrapper";
    componentToRender = <Tabs data={corporationTabData} />;
  } else if (currentPath === "/") {
    componentToRender = (
      <>
        <AboutUsMobile />
        <OurMissionMobile />
      </>
    );
  }

  if (
    (currentPath === "/about" || currentPath === "/mission") &&
    window.innerWidth <= 1250
  ) {
    window.location.href = "/";
  }

  return (
    <>
      <div className={backgroundImageClass}>
        <div className={triangleClass}>
          <main>
            <Header />
            <Outlet />
          </main>
        </div>
        {componentToRender}
        <Footer />
        <div className="preloadImg1"></div>
        <div className="preloadImg2"></div>
      </div>
    </>
  );
};

export { Layout };
