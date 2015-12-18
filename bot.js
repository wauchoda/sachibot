var Discord = require("discord.js");

var bot = new Discord.Client();


//displays commands
bot.on("message", function(message){
    if(message.content === "-help")
        bot.sendMessage(message, "ayy (Displays 'lmao')\nping (Displays 'pong')\n-avatar (Displays the user's avatar)\n");
});

//ayy lmao printer
bot.on("message", function(message){
    if(message.content === "ayy")
        bot.sendMessage(message, "lmao");
});

//ping pong printer
bot.on("message", function(message){
    if(message.content === "ping")
        bot.sendMessage(message, "pong");
});

//gets avatar of the sender
bot.on("message", function(message){
    if(message.content === "-avatar")
        bot.reply( message, message.sender.avatarURL );
});

//gets avatar of the chosen person
var regex = /~.\s./;
var regcheck = /~avatar/;
bot.on("message", function(message){
    if(message.content === "-avatar")
        bot.reply( message, message.sender.avatarURL );
});


bot.login("wauchoda@gmx.com", "bahlsen108");