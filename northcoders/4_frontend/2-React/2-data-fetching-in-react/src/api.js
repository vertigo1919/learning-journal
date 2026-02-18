export function getUserById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: 'Failed to fetch users',
        });
      }
      return res.json();
    }
  );
}
