
/**Admin Regex Patterns */
const adminIdRegEx = /^(ADM-)[0-9]{1,3}$/;
const adminNameRegEx = /^[A-z ]{5,20}$/;
var adminPwdRegEx = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
var adminContactRegEx = /^(071|077|075|078|)[0-9]{7}$/;