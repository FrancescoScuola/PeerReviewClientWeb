function getRole() {
    return localStorage.getItem(CONFIG.LOCAL_STORAGE_ROLE);
}

function getToken() {
    return localStorage.getItem(CONFIG.LOCAL_STORAGE_TOKEN_KEY);
}

function getCourseId() {
    return localStorage.getItem(CONFIG.LOCAL_STORAGE_COURSE_ID_KEY);
}

function getRoleToken() {
    return localStorage.getItem(CONFIG.LOCAL_STORAGE_TOKEN_ROLE_KEY);
}

function isLoggedIn() {
    return document.cookie.split('; ').some(cookie => cookie.startsWith('.ASPXAUTH='));
}


async function HttpGet(url, roleAuth) {
    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          "x-role": roleAuth
        }
      });
  
      if (!response.ok) {
        console.error(`Errore: ${response.status} - ${response.statusText}`);
        return null;
      }
  
      return await response.json();
    } catch (error) {
      console.error('Errore durante la richiesta:', error);
      throw error; // Rilancia l'errore
    }
  }
  

