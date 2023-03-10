const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shneck')
		.setDescription('Lets the world know the biggest shneck of them all!'),
	async execute(interaction) {
		return interaction.reply(`Mipz Bennifrance the worlds biggest shneck and don't let anybody tell you otherwise!`);
	},
};