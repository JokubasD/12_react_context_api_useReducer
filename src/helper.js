export async function getData(url = 'https://reqres.in/api/login') {
  try {
    const resp = await fetch(url);
    const dataInJs = await resp.json();

    return dataInJs;
  } catch (error) {
    console.warn('klaida getData', error);
  }
}

export async function sendData(
  dataToSend,
  url = 'https://reqres.in/api/login'
) {
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(dataToSend),
    });

    return resp.json();
  } catch (error) {
    console.warn('klaida getData', error);
  }
}
