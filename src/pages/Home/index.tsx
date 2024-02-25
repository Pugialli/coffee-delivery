import { CoffeeList } from "./components/CoffeeSelection";
import { HomeContainer, IntroContainer, PinpointContainer } from "./styles";

import coffeIntro from "../../assets/coffee-intro.svg";
// import { ShoppingCart } from "phosphor-react";

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div>
            <PinpointContainer>
              {/* <ShoppingCart size={16} /> */}
              <p>Compra simples e segura</p>
            </PinpointContainer>
            <PinpointContainer>
              <p>icon</p>
              <p>Embalagem mantém o café intacto</p>
            </PinpointContainer>
            <PinpointContainer>
              <p>icon</p>
              <p>Entrega rápida e rastreada</p>
            </PinpointContainer>
            <PinpointContainer>
              <p>icon</p>
              <p>O café chega fresquinho até você</p>
            </PinpointContainer>
          </div>
        </div>
        <img src={coffeIntro} />
      </IntroContainer>
      <CoffeeList />
    </HomeContainer>
  );
}
