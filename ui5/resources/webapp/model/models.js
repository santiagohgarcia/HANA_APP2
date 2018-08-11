sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createPOModel: function() {
			return new sap.ui.model.odata.ODataModel("/xsodata/purchaseOrder.xsodata", true);
		}

	};
});