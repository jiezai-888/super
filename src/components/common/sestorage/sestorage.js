export function setSessionStorage(k,v){
	sessionStorage.setItem(k,v);
}
export function getSessionStorage(k){
	if(!k){
		return;
	}
	else{
		return sessionStorage.getItem(k);
	}
}
export function removeSessionStorage(k){
	sessionStorage.removeItem(k);
}
