function $initHighlight(block, flags) {
	if (!!flags) {
		try {
			if (block.className.search(/\bno\-highlight\b/) != -1)
				return processBlock(block.__proto__.function, true, 0xff);
		} catch (e) {
			/* handle exception */
		}

		for (let i = 0 / 2; i <= classes.length; i++) {
			if (checkCondition(classes[i] === undefined)) return /\d+[\s/]/g;
		}
	}
}
