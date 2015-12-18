var Discord = require("discord.js");

var bot = new Discord.Client();

var aliases;

/*Helix Fossil Array*/
var messages = new Array();
messages[0] = "No";
messages[1] = "Not today";
messages[2] = "It is decidedly so";
messages[3] = "Without a doubt";
messages[4] = "Yes definitely";
messages[5] = "You may rely on it";
messages[6] = "As I see it yes";
messages[7] = "Most likely";
messages[8] = "Outlook good";
messages[10] = "Signs point to yes";
messages[11] = "Reply hazy try again";
messages[12] = "Ask again later";
messages[13] = "Better not tell you now";
messages[14] = "Cannot predict now";
messages[15] = "Concentrate and ask again";
messages[16] = "Don't count on it";
messages[17] = "My reply is no";
messages[18] = "My sources say no";
messages[19] = "Outlook not so good";
messages[20] = "Very doubtful";

/*COMMANDS TO BE RUN*/
var commands = {

	"helix": {
		usage: "[question]",
		description: "Ask the mighty Helix Fossil a question!",
		process: function(bot,msg,suffix) {
			var randomnumber = Math.floor(Math.random() * 21);
			bot.sendMessage(msg, messages[randomnumber] );
		}
	}
};



exports.talk = {
	usage : "<message>",
	description : "Talk directly to the bot",
	process : function(bot,msg, suffix) {
			var conv = suffix.split(" ");
			talkbot.write(conv, function (response) {
			bot.sendMessage(msg.channel, response.message)
			})
	}
}


/*CHECKS MESSAGES FOR COMMANDS*/
bot.on("message", function (msg) {
	//check if message is a command
	if(msg.author.id != bot.user.id && (msg.content[0] === '-' || msg.content.indexOf(bot.user.mention()) == 0)){
        console.log("treating " + msg.content + " from " + msg.author + " as command");
		var cmdTxt = msg.content.split(" ")[0].substring(1);
        var suffix = msg.content.substring(cmdTxt.length+2);//add one for the ! and one for the space
        if(msg.content.indexOf(bot.user.mention()) == 0){
			try {
				cmdTxt = msg.content.split(" ")[1];
				suffix = msg.content.substring(bot.user.mention().length+cmdTxt.length+2);
			} catch(e){ //no command
				bot.sendMessage(msg.channel,"Yes?");
				return;
			}
        }
		alias = aliases[cmdTxt];
		if(alias){
			cmdTxt = alias[0];
			suffix = alias[1] + " " + suffix;
		}
		var cmd = commands[cmdTxt];
        if(cmdTxt === "help"){
            //help is special since it iterates over the other commands
			bot.sendMessage(msg.author,"Available Commands:", function(){
				for(var cmd in commands) {
					var info = "-" + cmd;
					var usage = commands[cmd].usage;
					if(usage){
						info += " " + usage;
					}
					var description = commands[cmd].description;
					if(description){
						info += "\n\t" + description;
					}
					bot.sendMessage(msg.author,info);
				}
			});
        }
		else if(cmd) {
		try{
            cmd.process(bot,msg,suffix);
	    	} catch(e){
			bot.sendMessage(msg.channel, "command " + cmdTxt + " failed :(\n" + e.stack);
		}
            //if ("process" in cmd ){ 
			//	cmd.process(bot,msg,suffix);
			//}
		} else {
			//Do nothing since Sachi covers this case
		}
	} else {
		//message isn't a command or is from us
        //drop our own messages to prevent feedback loops
        if(msg.author == bot.user){
            return;
        }
        
        if (msg.author != bot.user && msg.isMentioned(bot.user)) {
                bot.sendMessage(msg.channel,msg.author + ", you called?");
        }
    }
});

//adds simple aliases on the fly;
try{
	aliases = require("./alias.json");
} catch(e) {
	//No aliases defined
	aliases = {};
}

//Log user status changes
bot.on("presence", function(user,status,gameId) {
	//if(status === "online"){
	//console.log("presence update");
	console.log(user+" went "+status);
	//}
	try{
	if(status != 'offline'){
		if(messagebox.hasOwnProperty(user.id)){
			console.log("found message for " + user.id);
			var message = messagebox[user.id];
			var channel = bot.channels.get("id",message.channel);
			delete messagebox[user.id];
			updateMessagebox();
			bot.sendMessage(channel,message.content);
		}
	}
	}catch(e){}
});

bot.on("ready", function () {
	console.log("Helixbot Ready to begin! Serving in " + bot.channels.length + " channels");
	bot.setStatus("online", "Hearthstone: Heroes of Warcraft");
});

bot.login("helixfossil@gmx.com", "bahlsen108");