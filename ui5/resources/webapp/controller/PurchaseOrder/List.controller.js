sap.ui.define([
	"web/ui5/controller/BaseController",
	"web/ui5/model/types"
], function(BaseController, types) {
	"use strict";

	return BaseController.extend("web.ui5.controller.PurchaseOrder.List", {
		types: types,
		onPressPO: function(event) {
			var context = event.getSource().getBindingContext("po");
			this.getRouter().navTo("PODetail", {
				PURCHASEORDERID: context.getObject().PURCHASEORDERID
			});
		}

	});
});