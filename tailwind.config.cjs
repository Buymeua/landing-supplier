/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const screens = defaultTheme.screens;

/**
 * A guide to configuring and customizing your Tailwind installation
 * https://tailwindcss.com/docs/configuration
 * https://tailwindcss.com/docs/customizing-colors#default-color-palette
 */

module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}', './src/*.{html,js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xs: { max: '640px' },
			xso: { max: '640px' },
			smo: { min: '640px', max: '767px' },
			mdo: { min: '768px', max: '1023px' },
			lgo: { min: '1024px', max: '1279px' },
			xlo: { min: '1280px', max: '1535px' },
			'2xlo': { min: '1536px' },
			...screens,
		},
		fontWeight: {
			hairline: 100,
			thin: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			black: 900,
			h1: 700,
		},
		container: {
			center: true,
		},
		colors: {
			...colors, // colors from tailwindcss/colors => for real websites define your own colors and remove this line
			tahiti: {
				// https://tailwindcss.com/docs/customizing-colors#using-custom-colors
				light: '#67e8f9',
				DEFAULT: '#06b6d4',
				dark: '#0e7490',
				black: 'linear-gradient(to right, #191A1B, #0E0F0F)'
			},
		},
		extend: {
			backgroundImage:{
				"pattern" : "url('/src/assets/bg/pattern.png')",
				"qoute" : "url('/src/assets/bg/quoteBg.png')",
				"refImage" : "url('/src/assets/img/refImage.png')",
				"frame" : "url('/src/assets/img/frame98.png')"

			},
			boxShadow: {
				'orange-500': '0 0 4px #FF5029',
				'green-500': '0 0 4px #61FF29',
				'cyan-500': '0 0 4px #29FFFF',
				'purple-500': '0 0 4px #EE29FF',
			},
		},
	},
	plugins: [],
};

