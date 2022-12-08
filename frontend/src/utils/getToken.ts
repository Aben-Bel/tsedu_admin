export function getToken() {
  const token: any = sessionStorage.getItem("token");
  const userToken = JSON.parse(token);
  return userToken;
}
