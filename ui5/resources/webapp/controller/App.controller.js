sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("web.ui5.controller.App", {
		onInit: function() {
			// Register the view with the message manager
			sap.ui.getCore().getMessageManager().registerObject(this.getView(), true);
		}
	});
});