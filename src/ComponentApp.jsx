import React from 'react';
import { useFetch } from './Hooks/useFetch';

const ComponentApp = () => {
  const { data, isLoading, hasError } = useFetch('https://api.giphy.com/v1/gifs/search?api_key=eAtY1pE7EXegmfV8ZO3dPR3c3ApG7Ndz&q=1&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips'); 
  // En el apartado UseFetch agregas la URL la cual necesitas tener los datos

  return (
    <div>
      {isLoading ? (
        <p>Cargando los datos solicitados</p>
      ) : (
        <div>
          {hasError ? (
            <p>Hubo un error al cargar los datos</p>
          ) : (
            <div>
              <h2>Resultados de la busqueda</h2>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ComponentApp