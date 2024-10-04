export default async function getIddata(id){
    const result = await fetch(`https://dummyjson.com/products/${id}`);
    return result.json()
}