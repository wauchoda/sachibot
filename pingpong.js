var Discord = require("discord.js");

var mybot = new Discord.Client();

//ayy lmao printer
mybot.on("message", function(message){
    if(message.content === "ayy")
        mybot.sendMessage(message, "lmao");
});

//ping pong printer
mybot.on("message", function(message){
    if(message.content === "ping")
        mybot.sendMessage(message, "pong");
});

//gets avatarr
mybot.on("message", function(message){
    if(message.content === "~avatar")
        mybot.sendMessage(message, "message.author.avatarUrl" );
});


mybot.login("wauchoda@gmx.com", "bahlsen108");