const BASE_URL = 'https://covid19.mathdro.id';
async function fetcher(url: string) {
  const res = await fetch(`${BASE_URL}${url}`, {
    credentials: 'same-origin',
  });

  return res.json();
}

export default fetcher;
