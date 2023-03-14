const { SlashCommandBuilder } = require('discord.js');
const { riotKey } = require('../config.json');
const sp = '%20';
const fetch = require("node-fetch");

async function fetchSumByName(name) {
    //turns name into link format
    while(name.includes(" ")) {
        let spaceSpot = name.indexOf(" ");
        name = name.substring(0, spaceSpot) + sp + name.substring(spaceSpot + 1);
    }
    //request riots API
    const link = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?${riotKey}`
    const response = await fetch(link);
    //turns the return value to json
    let data = await response.json();
    console.log(data);
    return data.summonerLevel;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yubz')
		.setDescription('Get your Daily Update on Yubz-U-Koontz.'),
	async execute(interaction) {
        const info = fetchSumByName('Achiles', 'summonerLevel');

		return interaction.reply(`Your Level: ` + await info);
	},
};