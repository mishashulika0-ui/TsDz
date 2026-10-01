type Currency = 'USD' | 'EUR'

function formatMoney(amount: number, currency: Currency, showSymbol: boolean = true): string {
  if (showSymbol) {
    return amount + ' ' + currency
  }
  return String(amount)
}

interface Product {
  id: number
  title: string
  price: number
}

function filterByPrice(products: Product[], max: number): Product[] {
  const result: Product[] = []
  for (const p of products) {
    if (p.price <= max) {
      result.push(p)
    }
  }
  return result
}

console.log(formatMoney(100, 'USD'))
console.log(formatMoney(100, 'EUR', false))

const items: Product[] = [
  { id: 1, title: 'A', price: 10 },
  { id: 2, title: 'B', price: 50 },
]
console.log(filterByPrice(items, 20))