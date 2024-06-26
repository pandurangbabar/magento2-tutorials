define(['jquery'], function(jQuery) {
	return function(originalWidget) {
		
		/*
		 * mage.dropdownDialog - named of widget which we want to rewrite
		 * open
		 */
 
		jQuery.widget('mage.dropdownDialog', originalWidget,
		{
			/*
			 * Added new method in the widget
			 */
			open: function(){
				console.log("I opended a dropdown!");
				
				//Call parent open for original functionality
				return this._super();
			}

		});

		/*
		 * Returned original widget definition
		 */
		return originalWidget;
	};
});
