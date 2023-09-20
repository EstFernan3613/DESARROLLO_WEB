export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=eAtY1pE7EXegmfV8ZO3dPR3c3ApG7Ndz&q=${category}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.original.url
      }
    })
  
    return gifs
  }