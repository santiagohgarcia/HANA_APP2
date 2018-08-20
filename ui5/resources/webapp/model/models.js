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
			var oModel = new sap.ui.model.odata.ODataModel("/xsodata/purchaseOrder.xsodata", {
				defaultUpdateMethod: "PUT",
				useBatch: true,
				defaultBindingMode: sap.ui.model.BindingMode.TwoWay
			});
			return oModel;
		}

	};
});