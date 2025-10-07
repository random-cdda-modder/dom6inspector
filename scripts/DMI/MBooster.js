//namespace scope
(function( DMI, $, undefined ){

var MBooster = DMI.MBooster = DMI.MBooster || {};

var Format = DMI.Format;
var Utils = DMI.Utils;

var modctx = DMI.modctx;
var modconstants = DMI.modconstants;

MBooster.prepareData_PreMod = function() {
}

MBooster.prepareData_PostMod = function() {
}


MBooster.CGrid = Utils.Class( DMI.CGrid, function() {
    //grid columns
	var columns = [
	    { id: "description",     width: 200, name: "Description", field: "description", sortable: true },
	];

	this.superClass.call(this, 'booster', [], columns); //superconstructor

	$(this.domsel+' .grid-container').hide();

	//in closure scope
	var that = this;

	if($(that.domselp+" select.nation").find(":selected")[0] && $(that.domselp+" select.nation").find(":selected")[0].text == "any nation") {
		$(that.domselp+" select.pretender-chassis").select2({ disabled: true });
	}

	//selecting a nation
	$(that.domselp+" select.nation").bind('change', function(e) {
		//clicked a nation?
		if (! ($(that.domselp+" select.nation").find(":selected")[0] && $(that.domselp+" select.nation").find(":selected")[0].text == "any nation")) {
			$(that.domselp+" select.pretender-chassis").select2({ disabled: false });

			//TODO: switch pretender-chassis selectbox to pretenders available to this nation
		} else {
			$(that.domselp+" select.pretender-chassis").select2({ disabled: true });
		}
	});

	//reads search boxes?
	this.getSearchArgs = function() {
		var args = { properties: this.getPropertyMatchArgs() };
		args.properties = Utils.propertiesWithKeys(args.properties);

		return args;
	}
	//apply search?
	this.searchFilter =  function(o, args) {
		return false;
	}

	//template
	var h='';
	h+='Unit '+ Utils.unitRef(254) +'can forge a '+ Utils.itemRef(62) +'.';



	$(that.domsel+' .report-container').append(h);

	//ref events on report container
	$(that.domsel+' div.report-container').attachRefMouseEvents().attachRefClickEvents()
	.dblclick(function() {
		that.detachShowingDetails();
	});

    //call filters and update  display
	//asyncronous to make sure all filter inputs are correctly initialised
	setTimeout(function() {
		that.init();
	},0);
});

//namespace args
}( window.DMI = window.DMI || {}, jQuery ));
