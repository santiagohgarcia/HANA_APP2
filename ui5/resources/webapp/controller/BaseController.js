sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";
	return Controller.extend("web.ui5.controller.BaseController", {

		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		getModel: function(sModelName) {
			return this.getView().getModel(sModelName);
		},

		byId: function(id) {
			return this.getView().byId(id);
		},

		onNavBack: function(oEvent) {
			var oHistory, sPreviousHash;
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			if(sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("appHome", {}, true /*no history*/ );
			}
		},

		showBusy: function() {
			sap.ui.core.BusyIndicator.show(0);
		},

		removeBusy: function() {
			sap.ui.core.BusyIndicator.hide(0);
		},

		setBusyFor: function(event) {
			this.setBusy(true);
		},

		removeBusyFor: function(event) {
			this.setBusy(false);
		},

		onMessagePopoverPress: function(oEvent) {
			this._getMessagePopover().openBy(oEvent.getSource());
		},

		openMessagePopoverDialog: function() {
			this._getMessagePopover().openBy(this.byId("messagePopoverButton"));
		},

		_getMessagePopover: function() {
			// create popover lazily
			if(!this._oMessagePopover) {
				this._oMessagePopover = sap.ui.xmlfragment(this.getView().getId(),
					"zib.ao.LoanOrigination.view.MessagePopover", this);
				this.getView().addDependent(this._oMessagePopover);
			}
			return this._oMessagePopover;
		},

		getText: function(id) {
			return this.getModel("i18n").getResourceBundle().getText(id);
		},

		getMessageManager: function() {
			return sap.ui.getCore().getMessageManager();
		}

	});
});