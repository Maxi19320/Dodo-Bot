module.exports = {
  name: "dev-panel",
  info: {
    description: "Configuración especial dedicada a los desarrolladores. Permite al usuario modificar elementos!",
    perms: ["`Enviar mensajes`"],
    dev: "true"
  },
  aliases: ["developer-panel", "dev-settings", "devpanel"],
  code: `$title[Developer panel]
$description[Este panel te permite cambiar algunas funciones del bot en segundo plano. 

Para cambiar una opción, usa el menú de selección a continuación.]
$color[Yellow]
$thumbnail[https://us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/devsettings.png]
$addSelectMenu[1;string;devmenu_$authorID;Seleciona una opcion;1;1;false;Mensaje de invitación del bot:Si el bot debe o no saludar a los nuevos servidores.:botwelcome:false:👋;Registro de errores:Enviar errores a un canal específico.:errorlog:false:📢;Embed color:Cambiar el color del embed actual utilizado en todos los comandos.:botembedcolor:false:🎨;Prelanzamiento:Whether or not to enable Pre-release mode.:botdevmode:false:🚧;Startup:Choose a channel for bot's startup msgs to be sent.:botstartup:false:🚦;Show build info:Whether or not to enable "Build Info" in version cmd:showbuildinfo:false:🛠️;Member requirement:How much members are required for new servers:memberrequirement:false:📋]
$addButton[2;Leave a server;2;leaveserverbutton_$authorID;false]
$cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;dev-panel;$authorID];$dateStamp];1000]]:R>]
$onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]
  `
  }
