// Princípio SOLID: OCP (Open/Closed Principle)
// A PriceCalculator NÃO precisa ser modificada para aceitar
// novos tipos de desconto. Basta criar novas estratégias.

// Classe base para estratégias de desconto
class DiscountStrategy {
  apply(price) {
    return price;
  }
}

// Estratégia: desconto de Black Friday
class BlackFridayDiscount extends DiscountStrategy {
  apply(price) {
    return price * 0.5;
  }
}

// Estratégia: desconto para estudantes
class StudentDiscount extends DiscountStrategy {
  apply(price) {
    return price * 0.8;
  }
}

// Classe que usa qualquer estratégia de desconto
class PriceCalculator {
  constructor(discountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  calculate(price) {
    return this.discountStrategy.apply(price);
  }
}

const originalPrice = 100;

const bfCalculator = new PriceCalculator(new BlackFridayDiscount());
console.log("Preço com Black Friday:", bfCalculator.calculate(originalPrice));

const studentCalculator = new PriceCalculator(new StudentDiscount());
console.log(
  "Preço com desconto Estudante:",
  studentCalculator.calculate(originalPrice)
);

const noDiscountCalculator = new PriceCalculator(new DiscountStrategy());
console.log(
  "Preço sem desconto:",
  noDiscountCalculator.calculate(originalPrice)
);
