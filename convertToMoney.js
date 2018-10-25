(function() {

	let defaultObject = {
		symbol: '$',
		format: {
			pos: '%s%v',
			neg: '-%s%v',
			zer: '%s%v'
		}
	}
	defaultObject.formatMoney = function convert(number, symbol, format) {
		symbol = (typeof symbol === 'object' ? symbol : {
		symbol: symbol,
		format: {
			pos: format || '%s%v',
			neg: format || '- %s%v',
			zer: format || '%s%v'
		}})

		if (Object.prototype.toString.call(symbol) === '[object Object]') {
			for (let prop in defaultObject) {
				if (defaultObject.hasOwnProperty(prop)) {
					if (symbol[prop] === undefined) {
						symbol[prop] = defaultObject[prop];
					}
				}
			}
		}
		let useFormat = number > 0 ? symbol.format.pos : number < 0 ? symbol.format.neg : symbol.format.zer;
		return useFormat.replace('%v', Math.abs(number)).replace('%s', symbol.symbol);

	}

	this.formatMoney =  defaultObject.formatMoney;


})()