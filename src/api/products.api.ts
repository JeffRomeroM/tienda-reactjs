//products
export const getProducts = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/products`);
    const products = await response.json();

    return products;    
}


export const getProduct = async (id: number) => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/products/${id}`);
    const product = await response.json();

    return product;
}


export const postProduct = async (data: any) => {
    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const product = await response.json();

    return product;
}

export const updateProduct = async (data: any, id:any) => {
    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const product = await response.json();

    return product;
}

export const deleteProduct = async ( id:any) => {
    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/products/${id}`, {
        method: 'DELETE',
        
    });
    const product = await response.json();

    return product;
}