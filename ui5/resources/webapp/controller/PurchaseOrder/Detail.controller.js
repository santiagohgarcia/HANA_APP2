sap.ui.define([
	"web/ui5/controller/BaseController",
	"web/ui5/model/types",
	"web/ui5/utils/validations"
], function(BaseController, types, validations) {
	"use strict";

	return BaseController.extend("web.ui5.controller.PurchaseOrder.Detail", {

		types: types,

		onInit: function() {
			this.getRouter().getRoute("PODetail").attachPatternMatched(this._onDetailMatched, this);
		},

		_onDetailMatched: function(event) {
			this.getView().bindElement({
				path: "/POHeader(" + event.getParameter("arguments").PURCHASEORDERID + ")",
				model: "po"
			});
		},

		onSave: function() {
			if (validations.isValid(this.getView(), "poFields")) {
				this.getView().getModel("po").submitChanges();
			}
		}
	});
});