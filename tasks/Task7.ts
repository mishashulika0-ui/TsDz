interface Product {
  id: number
  title: string
  price: number
}

interface CartItem {
  product: Product
  quantity: number
}

class Cart {
  #items: CartItem[] = []

  add(product: Product, qty: number = 1): void {
    let found: CartItem | undefined = undefined
    for (const i of this.#items) {
      if (i.product.id === product.id) {
        found = i
      }
    }

    if (found) {
      found.quantity += qty
    } else {
      this.#items.push({ product: product, quantity: qty })
    }
  }

  remove(id: number): void {
    const next: CartItem[] = []
    for (const i of this.#items) {
      if (i.product.id !== id) {
        next.push(i)
      }
    }
    this.#items = next
  }

  total(): number {
    let sum = 0
    for (const i of this.#items) {
      sum += i.product.price * i.quantity
    }
    return sum
  }

  getItems(): readonly CartItem[] {
    return [...this.#items]
  }
}

const cart = new Cart()
cart.add({ id: 1, title: 'Mouse', price: 25 }, 2)
cart.add({ id: 1, title: 'Mouse', price: 25 })
cart.add({ id: 2, title: 'Monitor', price: 300 })

console.log(cart.total())
console.log(cart.getItems())
cart.remove(1)
console.log(cart.total())