export default async function getAlldata(){
    const result = await fetch('https://dummyjson.com/products');
    return result.json()
}