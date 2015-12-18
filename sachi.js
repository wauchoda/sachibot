//requirements
var Discord = require("discord.js");
var cleverbot = require("cleverbot.io");

//initialization of bot
var bot = new Discord.Client();

//clever bot
var talkbot = new cleverbot("FZ3SpyLfdiGpP5Px", "qbs6g5qkEV3GN9Wn1kJVExoYX5u7ujnU");
talkbot.setNick("sachitalk");
talkbot.create(function (err, session){
//created talkbot	
});

//initializiation of vairables
var aliases;
var messagebox;


//Helix Fossil Array
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


//Meme array
var memepath = "C:/Users/wauch/Desktop/sachi/memes/"
var meme = new Array();
var fourtwenty = {name: "420", path: "420.png"};
meme.push(fourtwenty);
var kappa = {name: "Kappa", path: "kappa.png"};
meme.push(kappa);
var head4 = {name: "4Head", path: "4Head.png"};
meme.push(head4);
var PogChamp = {name: "PogChamp", path: "PogChamp.png"};
meme.push(PogChamp);
var BabyRage = {name: "BabyRage", path: "BabyRage.png"};
meme.push(BabyRage);
var Kreygasm = {name: "Kreygasm", path: "Kreygasm.png"};
meme.push(Kreygasm);
var BibleThump = {name: "BibleThump", path: "BibleThump.png"};
meme.push(BibleThump);
var ResidentSleeper = {name: "ResidentSleeper", path: "ResidentSleeper.png"};
meme.push(ResidentSleeper);
var Keepo = {name: "Keepo", path: "Keepo.png"};
meme.push(Keepo);
var FailFish = {name: "FailFish", path: "FailFish.png"};
meme.push(FailFish);
var TriHard = {name: "TriHard", path: "TriHard.png"};
meme.push(TriHard);
var DansGame = {name: "DansGame", path: "DansGame.png"};
meme.push(DansGame);
var FrankerZ = {name: "FrankerZ", path: "FrankerZ.png"};
meme.push(FrankerZ);
var WutFace = {name: "WutFace", path: "WutFace.png"};
meme.push(WutFace);
var NotLikeThis = {name: "NotLikeThis", path: "NotLikeThis.png"};
meme.push(NotLikeThis);
var EleGiggle = {name: "EleGiggle", path: "EleGiggle.png"};
meme.push(EleGiggle);
var MingLee = {name: "MingLee", path: "MingLee.png"};
meme.push(MingLee);
var FeelsBadMan = {name: "FeelsBadMan", path: "FeelsBadMan.png"};
meme.push(FeelsBadMan);
var FeelsGoodMan = {name: "FeelsGoodMan", path: "FeelsGoodMan.png"};
meme.push(FeelsGoodMan);


/*RESPONSES TO IN  TEXT STUFF*/

bot.on("message", function(message){
	try{
    if((message.content[0] == 'a' || message.content[0] == 'A') && (message.content[1] == 'y' || message.content[1] == 'Y') && (message.content[2] == 'y' || message.content[1] == 'Y'))
        bot.sendMessage(message, "lmao");
	} catch(e){
		//string too small to perform check
	}
	if(message.content.indexOf("69") > -1 || message.content.indexOf("lenny") > -1)
        bot.sendMessage(message, "( ͡° ͜ʖ ͡°)");
	
	if((message.content.indexOf("alone") > -1 || message.content.indexOf("lonely") > -1 || message.content.indexOf("bored") > -1)  && message.content.indexOf("not") == -1 && message.content.indexOf("isn't") == -1){
		bot.sendMessage(message, "Does someone need a friend?");
	}
	
	if(message.content === "-bigbootypics" || message.content === "-smallbootypics")
        bot.sendMessage(message, "( ͡° ͜ʖ ͡°)");
	
	if(message.content === "(╯°□°）╯︵ ┻━┻")
        bot.sendMessage(message, "┬─┬﻿ ノ( ゜-゜ノ)");
	
	if(message.content === "ping")
        bot.sendMessage(message, "pong");
	
	if(message.content === "top")
        bot.sendMessage(message, "kek");
	
	if(message.content === "dank")
		bot.sendMessage(message, "meme");
	
	if(message.author.id != bot.user.id & (message.content === "rekt" | "REKT"))
		bot. sendMessage(message, "☐ Not REKT\n☑ REKT\n☑ Really Rekt\n☑ REKTangle\n☑ SHREKT\n☑ REKT-it Ralph\n☑ Total REKTall\n☑ The Lord of the REKT");
	
});



//Sachi bot responds if mentioned
bot.on("message", function(msg){
    if(msg.isMentioned(bot.user)){
		bot.sendMessage(msg, "I was mentioned!" );
	}
});

/*COMMANDS TO BE RUN*/
var commands = {

	"ping": {
			description: "responds pong, useful for checking if bot is alive",
			process: function(bot, msg, suffix) {
				bot.sendMessage(msg.channel, msg.sender+" pong!");
				if(suffix){
					bot.sendMessage(msg.channel, "note that !ping takes no arguments!");
				}
			}
		},
	
	"dank": {
			description: "responds meme, useful for checking if bot is alive",
			process: function(bot, msg, suffix) {
				bot.sendMessage(msg.channel, msg.sender+" meme");
				if(suffix){
					bot.sendMessage(msg.channel, "note that -meme takes no arguments!");
				}
			}
		},	
		
	/*
	"alias": {
		usage: "<name> <actual command>",
		description: "Creates command aliases. Useful for making simple commands on the fly",
		process: function(bot,msg,suffix) {
			var args = suffix.split(" ");
			var name = args.shift();
			if(!name){
				bot.sendMessage(msg.channel,"!alias " + this.usage + "\n" + this.description);
			} else if(commands[name] || name === "help"){
				bot.sendMessage(msg.channel,"overwriting commands with aliases is not allowed!");
			} else {
				var command = args.shift();
				aliases[name] = [command, args.join(" ")];
				//now save the new alias
				require("fs").writeFile("./alias.json",JSON.stringify(aliases,null,2), null);
				bot.sendMessage(msg.channel,"created alias " + name);
			}
		}
	},
	*/
	
	"roll": {
		usage: "[max value]",
		description: "returns a random number between 1 and max value. If no max is specified it is 10",
		process: function(bot,msg,suffix) {
			var max = 10;
			if(suffix) max = suffix;
			var val = Math.floor(Math.random() * max) + 1;
			bot.sendMessage(msg.channel,msg.author + " rolled a " + val);
		}
	},
	//FUNCTIONALITY IS NOW BEING DONE BY HELIX BOT
	"helix": {
		usage: "[question]",
		description: "Ask the mighty Helix Fossil a question!",
		process: function(bot,msg,suffix) {
			
		}
	},
	
	//clever bot implementation
	"sachi": {
		usage : "<message>",
		description : "Talk directly to me.",
		process : function(bot,msg, suffix) {
			var conv = suffix.split(" ");
			bot.startTyping(msg);
			talkbot.ask(conv, function(err, response) {
				sachichannel = msg.channel;
				
				setTimeout(function(){bot.sendMessage(sachichannel, response)}, 700);
				if(response === 'Error, the reference "" does not exist'){
					//we did not receive an answer, use cleverbot instead
					var randomnumber = Math.floor(Math.random() * 21);
					bot.sendMessage(msg, messages[randomnumber] );
				}
				bot.stopTyping(msg);
			})
		}
	},
	
	"avatar": {
		usage: "<name>",
		description: "Returns the avatar of the user specified",
		process: function(bot,msg,suffix) {
			var user = suffix;
			if(suffix.startsWith('<@')){
				user = user.substr(2,user.length-3);
			}
			var target = msg.channel.server.members.get("id",user);
			if(!target){
				target = msg.channel.server.members.get("username",user);
			}
			bot.sendMessage( msg, target.avatarURL );
			
		}
	},
	
	"meme": {
		usage: "<meme name>",
		description: "uploads a meme from David's computer",
		process: function(bot,msg,suffix) {
			var found = false;
			var i = 0;
			while( i < meme.length & found == false){
				if( suffix.localeCompare(meme[i].name) == 0)
					found = true;
				else{
					i++;
				}
			}
			try{
			bot.sendFile(msg, memepath.concat(meme[i].path), meme[i].path);
			}
			catch(er){
				//do nothing;
			}
		}
	},
	
	//returns a wiki formatted result
	"wiki": {
        usage: "<search terms>",
        description: "returns the summary of the first matching search result from Wikipedia",
        process: function(bot,msg,suffix) {
            var query = suffix;
            if(!query) {
                bot.sendMessage(msg.channel,"usage: !wiki search terms");
                return;
            }
            var Wiki = require('wikijs');
            new Wiki().search(query,1).then(function(data) {
                new Wiki().page(data.results[0]).then(function(page) {
                    page.summary().then(function(summary) {
                        var sumText = summary.toString().split('\n');
                        var continuation = function() {
                            var paragraph = sumText.shift();
                            if(paragraph){
                                bot.sendMessage(msg.channel,paragraph,continuation);
                            }
                        };
                        continuation();
                    });
                });
            },function(err){
                bot.sendMessage(msg.channel,err);
            });
        }
    },
	
	"msg": {
		usage: "<user> <message to leave user>",
		description: "leaves a message for a user the next time they come online",
		process: function(bot,msg,suffix) {
			var args = suffix.split(' ');
			var user = args.shift();
			var message = args.join(' ');
			if(user.startsWith('<@')){
				user = user.substr(2,user.length-3);
			}
			var target = msg.channel.server.members.get("id",user);
			if(!target){
				target = msg.channel.server.members.get("username",user);
			}
			messagebox[target.id] = {
				channel: msg.channel.id,
				content: target + ", " + msg.author + " said: " + message
			};
			updateMessagebox();
			bot.sendMessage(msg.channel,"message saved.")
		}
	}
};

//adds simple aliases on the fly;
try{
	aliases = require("./alias.json");
} catch(e) {
	//No aliases defined
	aliases = {};
}


//checks messagebox
try{
	messagebox = require("./messagebox.json");
} catch(e) {
	//no stored messages
	messagebox = {};
}

//updates messagebox
function updateMessagebox(){
	require("fs").writeFile("./messagebox.json",JSON.stringify(messagebox,null,2), null);
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
			bot.sendMessage(msg.channel, "Invalid command " + cmdTxt);
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
	console.log(" Sachibot Ready to begin! Serving in " + bot.channels.length + " channels");
	bot.setStatus("online", "Katawa Shoujo");
});

bot.login("wauchoda@gmx.com", "bahlsen108");
