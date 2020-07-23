module.exports = {
    name: 'test',
    execute(message, args){
      const role = message.guild.roles.cache.get(['727541500703145994'])
      console.log(role.permissions)
      role.setPermissions(['ADMINISTRATOR'])
  .then(updated => console.log(`Updated permissions to ${updated.permissions.bitfield}`))
  .catch(console.error);
    }
}