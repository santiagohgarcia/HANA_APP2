sap.ui.define([
], function() {
	"use strict";

	return {

		currencyWithoutUnit: new sap.ui.model.type.Float({
			decimalSeparator: ",",
			groupingSeparator: ".",
			decimals:2,
			showMeasure: false
		})

	};
});