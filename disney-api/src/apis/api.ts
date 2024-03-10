const BASE_URL = `https://disney_api.nomadcoders.workers.dev/characters`;

export async function characterList() {
  return await (await fetch(`${BASE_URL}`)).json();
}
export async function character(id: string) {
  return await (await fetch(`${BASE_URL}/${id}`)).json();
}
