const postData = async (url, data) => {
  const res = await fetch(url, { method: 'POST', body: data });

  const text = await res.text();

  return text;
};
