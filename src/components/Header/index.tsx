import { MapPin, ShoppingCart } from "phosphor-react";
import {
  CartContainer,
  HeaderContainer,
  LocationContainer,
  LocationPin,
} from "./styles";
import logoCoffee from "../../assets/coffee-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <nav>
        <LocationContainer>
          <LocationPin>
            <MapPin weight="fill" size={22} />
          </LocationPin>
          <span>Rio de Janeiro, RJ</span>
        </LocationContainer>
        <CartContainer>
          <ShoppingCart size={24} />
        </CartContainer>
      </nav>
    </HeaderContainer>
  );
}
