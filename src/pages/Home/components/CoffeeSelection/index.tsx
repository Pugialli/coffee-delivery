import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <div>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </div>
    </CoffeeListContainer>
  );
}
