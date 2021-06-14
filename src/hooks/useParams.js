import { matchPath, useLocation } from "react-router";

/**
 * este funcion es un hook para extreaer parametros de una URL sin la necesidad que un componente este dentro de un <Route></Route>
 * @param {String} path formato del path que debe identficar con ":" el o los parametros que queremos extraer de la url
 * @returns
 */
function useParams(path) {
  const { pathname } = useLocation();
  const match = matchPath(pathname, { path });
  return match?.params || {};
}

export default useParams;
