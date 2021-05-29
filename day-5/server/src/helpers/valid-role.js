const validRole = async (rbac, role)=>{
  const isvalid = await rbac.getRole(role);
  if(isvalid){
    return true
  }
  return false
}

module.exports = validRole;