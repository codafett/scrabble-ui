export const ID_TOKEN_KEY = 'auth:idToken';
export const REFRESH_TOKEN_KEY = 'auth:refreshToken';
export const PERMISSION_STORAGE_KEY = 'auth:permission';

function StorageManager() {
  return ({
    setObject: function setObject(key, obj, storage = sessionStorage) {
      storage.setItem(
        key,
        JSON.stringify(obj),
      );
    },
    getObject: function getObject(key, defaultValue = {}, storage = sessionStorage) {
      const obj = storage.getItem(key);
      if (obj) {
        return JSON.parse(obj);
      }
      return defaultValue;
    },
    removeObject: function removeObject(key, storage = sessionStorage) {
      storage.removeItem(key);
    },
    isLoggedIn: function isLoggedIn(storage = sessionStorage) {
      return !!storage.getItem(ID_TOKEN_KEY);
    },
    setIdToken: function setIdToken(token, storage = sessionStorage) {
      storage.setItem(ID_TOKEN_KEY, token);
    },
    getIdToken: function getIdToken(storage = sessionStorage) {
      return storage.getItem(ID_TOKEN_KEY);
    },
    removeIdToken: function removeIdToken(storage = sessionStorage) {
      storage.removeItem(ID_TOKEN_KEY);
    },
    setRefreshToken: function setRefreshToken(refreshToken, storage = sessionStorage) {
      storage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    },
    getRefreshToken: function getRefreshToken(storage = sessionStorage) {
      return storage.getItem(REFRESH_TOKEN_KEY);
    },
    removeRefreshToken: function removeRefreshToken(storage = sessionStorage) {
      storage.removeItem(REFRESH_TOKEN_KEY);
    },
    setPermissions: function setPermissions(permissions, storage = sessionStorage) {
      this.setObject(PERMISSION_STORAGE_KEY, permissions, storage);
    },
    getPermissions: function getPermissions(permissions, storage = sessionStorage) {
      return this.getObject(PERMISSION_STORAGE_KEY, [], storage);
    },
    removePermissions: function removePermissions(storage = sessionStorage) {
      this.removeObject(PERMISSION_STORAGE_KEY, storage);
    },
    clearAuthInfo: function clearUserInfo(storage = sessionStorage) {
      this.removeRefreshToken(storage);
      this.removeIdToken(storage);
      this.removePermissions(storage);
    },
  });
}

export default StorageManager();
