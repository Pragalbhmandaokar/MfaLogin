export const baseUrl = "http://localhost:5000/api/";
export const authentication = baseUrl + "authentication";
export const getUserById = (id) => {
  return baseUrl + `user/${id}`;
};
