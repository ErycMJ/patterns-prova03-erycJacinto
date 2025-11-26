// Princípio SOLID: SRP (Single Responsibility Principle)
// Cada classe possui UMA responsabilidade:
// - Order: lida apenas com cálculos do pedido
// - OrderRepository: lida apenas com persistência de dados
// - EmailService: lida apenas com envio de e-mail

// Classe responsável SOMENTE pelos dados do pedido e cálculo do total
class Order {
  constructor(items) {
    this.items = items;
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

// Classe responsável SOMENTE por salvar o pedido
class OrderRepository {
  save(order) {
    console.log("Pedido salvo no banco de dados:", order);
  }
}

// Classe responsável SOMENTE por enviar e-mails
class EmailService {
  sendConfirmation(order) {
    console.log("E-mail de confirmação enviado para o pedido:", order);
  }
}

const items = [
  { name: "Mouse", price: 50 },
  { name: "Teclado", price: 100 },
  { name: "Monitor", price: 800 }
];

const order = new Order(items);
const repository = new OrderRepository();
const emailService = new EmailService();

const total = order.calculateTotal();

console.log("Total calculado do pedido:", total);

repository.save(order);

emailService.sendConfirmation(order);
