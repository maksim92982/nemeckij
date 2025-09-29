(function(){
  const AUTH_KEY = 'app_auth_v1';
  function isAuthed(){
    try{ return JSON.parse(localStorage.getItem(AUTH_KEY) || 'false') === true; }catch(e){ return false; }
  }
  function login(u,p){
    if(u==='admin' && p==='12345'){
      localStorage.setItem(AUTH_KEY,'true');
      return true;
    }
    return false;
  }
  function logout(){ localStorage.removeItem(AUTH_KEY); }
  window.AppAuth = { isAuthed, login, logout };
})();


