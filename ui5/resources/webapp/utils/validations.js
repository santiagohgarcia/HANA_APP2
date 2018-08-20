sap.ui.define([], function() {
	"use strict";
	return {

		_i18nModel: null,

		validateRequireds: function(view, fieldGroup) {
			var oMessageManager = sap.ui.getCore().getMessageManager();
			var controls = view.getControlsByFieldGroupId(fieldGroup);
			this._i18nModel = this._i18nModel ? this._i18nModel : view.getModel("i18n").getResourceBundle();
			var that = this;
			controls.forEach(function(c) {
				try {
					if (c instanceof sap.m.Select) {
						var selRequired = Boolean(c.getCustomData()[0].getValue("required"));
						if (selRequired && !c.getSelectedKey()) {
							oMessageManager.addMessages(that.generateRequiredMessage(c, "selectedKey"));
						}
					} else {
						if (c.getRequired() && !c.getValue()) {
							oMessageManager.addMessages(that.generateRequiredMessage(c, "value"));
						}
					}
				} catch (Exception) {
					console.warn("field not required");
				}
			});
		},

		generateRequiredMessage: function(c, val) {
			var oMessageProcessor = new sap.ui.core.message.ControlMessageProcessor(); //SINGLETON
			var oMessageManager = sap.ui.getCore().getMessageManager();
			oMessageManager.registerMessageProcessor(oMessageProcessor);
			return new sap.ui.core.message.Message({
				message: this._i18nModel.getText("requiredMessage"),
				type: sap.ui.core.MessageType.Error,
				target: c.getId() + "/" + val,
				processor: oMessageProcessor,
				validation: true
			});
		},

		addMessage: function(text, c, val) {
			var oMessageProcessor = new sap.ui.core.message.ControlMessageProcessor(); //SINGLETON
			var oMessageManager = sap.ui.getCore().getMessageManager();
			oMessageManager.registerMessageProcessor(oMessageProcessor);
			oMessageManager.addMessages(
				new sap.ui.core.message.Message({
					message: text,
					type: sap.ui.core.MessageType.Error,
					target: c.getId() + "/" + val,
					processor: oMessageProcessor,
					validation: true
				}));
		},

		hasErrors: function() {
			var error = sap.ui.getCore().getMessageManager().getMessageModel().getData().filter(function(e) {
				return (e.type === "Error" && !e.technical);
			})[0];
			return (error) ? true : false;
		},

		isValid: function(view, fieldGroupId) {
			this.validateRequireds(view, fieldGroupId);
			return !this.hasErrors();
		}
	};
});