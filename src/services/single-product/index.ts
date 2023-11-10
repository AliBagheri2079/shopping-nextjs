const hostname = 'http://localhost:3000';
const pathname = 'api/product';
const search = '?id=';

export const getSingleProduct = async <T>(id: string | number): Promise<T> => {
  const response = await fetch(`${hostname}/${pathname}${search}${id}`, {
    method: 'GET',
    next: {
      revalidate: 3600,
    },
  });
  const { data } = await response.json();
  return data;
};

export const addSingleProduct = async <T>(newProduct: T): Promise<string> => {
  // 'use server';

  const response = await fetch(`${hostname}/${pathname}`, {
    method: 'POST',
    body: JSON.stringify(newProduct),
    cache: 'no-cache',
  });
  const { message } = await response.json();
  return message;
};

export const updateSingleProduct = async <T>(
  id: string | number,
  updatedProduct: T,
): Promise<string> => {
  // 'use server';

  const response = await fetch(`${hostname}/${pathname}${search}${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedProduct),
    cache: 'no-cache',
  });
  const { message } = await response.json();
  return message;
};

export const removeSingleProduct = async <T>(
  id: string | number,
): Promise<string> => {
  // 'use server';

  const response = await fetch(`${hostname}/${pathname}${search}${id}`, {
    method: 'DELETE',
    cache: 'no-cache',
  });
  const { message } = await response.json();
  return message;
};
