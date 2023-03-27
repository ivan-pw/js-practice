const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    body: data,
  });

  const text = await res.text();

  return text;
};

const getResource = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }
  const json = await res.json();

  return json;
};

export { postData, getResource };
