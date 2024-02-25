import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import { BackgroundContainer } from "../../pages/Home/styles";

export function DefaultLayout() {
  return (
    <BackgroundContainer>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </BackgroundContainer>
  );
}
