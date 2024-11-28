function getRole() {
    return localStorage.getItem(CONFIG.LOCAL_STORAGE_ROLE);
}

function getToken() {
    return localStorage.getItem(CONFIG.LOCAL_STORAGE_TOKEN_KEY);
}

function getCourseId() {
    return localStorage.getItem(CONFIG.LOCAL_STORAGE_COURSE_ID_KEY);
}