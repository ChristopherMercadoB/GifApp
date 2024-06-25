


const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=3iw6jo51unTxhuVaKrIH9fzg6Otk3DMY&q=${category}&limit=9`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const gift = data.map((img) => ({
    id: img.id,
    title: img.title,
    img: img.images.downsized_medium.url,
  }));

  return gift;
};


export default getGif