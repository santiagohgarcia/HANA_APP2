sap.ui.define([
	"web/ui5/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("web.ui5.controller.PurchaseOrder.Detail", {
		onInit: function() {
			this.getRouter().getRoute("PODetail").attachPatternMatched(this._onDetailMatched, this);
		},

		_onDetailMatched: function(event) {
			this.getView().bindElement({
				path: "/POHeader(" + event.getParameter("arguments").PURCHASEORDERID + ")",
				model: "po"
			});
		}
	});
});