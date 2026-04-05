export const getToken = () => {
  const match = document.cookie.match(/(?:^|;\s*)jwtToken=([^;]*)/);
  if (match) {
    try {
      return JSON.parse(decodeURIComponent(match[1]));
    } catch {
      return decodeURIComponent(match[1]);
    }
  }
  return '';
};

export const getAuthHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
