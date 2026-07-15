const phone:string = 'iphone 16 pro max' 

console.log(phone.includes('max'))

// example 
// CSSMathProduct.title.toLowerCase().includes(title.toLowerCase())

// const numbers = [1,2,3,4,5,6,7,8,9]

// const even = numbers.filter(number =>number%2 ===0)
// console.log(even)

// product example 
// products.filter(product => product.category ==="smartphones")

const numbers = [1,2,3,4,5,6,7,8]
// numbers.splice(2,3)
const deleted = numbers.splice(2,1)[0]
console.log(deleted)


// This is exactly what you'll use in backend projects

// For CRUD APIs, these are the array methods you'll reach for most often:

// find() → Get one product by ID.
// findIndex() → Locate an item before updating or deleting it.
// filter() → Search products, categories, or other collections.
// map() → Shape or transform response data (e.g., hide sensitive fields or add computed values).
// some() → Check for duplicates before creating a new record.
// every() → Validate that all items meet a condition.



// before db
// Global error handling middleware
// 404 Not Found middleware
// Consistent response format
// Pagination (?page=1&limit=10)
// Filtering (?category=smartphones)
// Sorting (?sort=price&order=asc)