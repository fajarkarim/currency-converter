export const GET = "GET";
export const POST = "POST";
export const PUT = "PUT";
export const DELETE = "DELETE";

export function xhr(route: string, verb: string, body?: object) {
  let method = Object.assign(
    { method: verb },
    body ? { body: JSON.stringify(body) } : null
  );

  return fetch(route, method)
    .then(resp => {
      let json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => {
        throw err;
      });
    })
    .then(json => json);
}