// Cube Form Placeholders
// Allows form fields to have placeholder text
// Supported field types: text, textarea, email, password
// Browser compatibility: Chrome, Firefox, IE7-9
// Note: Password field not supported in <= IE8
// version 1.0, November 17 2012
// by Cube Websites

;(function($) {

    $.cubeFormPlaceholders = function(el, options) {

        var defaults = {
			placeholderAttribute: 'placeholder',
			placeholderClass: 'placeholder'
        }

        var plugin = this;

        plugin.settings = {}

        var init = function() {
            plugin.settings = $.extend({}, defaults, options);
            plugin.el = el;
            
			plugin.setupForm();
			
        }

		plugin.setupForm = function() {
			$('input[type=text],input[type=email],input[type=password],textarea',plugin.el).each(function(){
				var formelement = $(this);
				
				// Skip fields with no default attribute
				if(formelement.data(plugin.settings.placeholderAttribute)=='')
					return;
				
				// Save the original field type (useful when changing password fields to text and vice versa)
				formelement.data('original-type',formelement.attr('type'));
				
				// Clear on focus
				formelement.focus(function(){
					clearPlaceholderText($(this));
				});
			
				// Restore placeholder on blur
				formelement.blur(function(){
					setPlaceholderText($(this));
				});
				
				// Add placeholder text by default
				setPlaceholderText(formelement);
				
			});
			
			// Remove placeholder values on submit
			plugin.el.bind('submit',function(){
				$('input[type=text],input[type=email],input[type=password],textarea',$(this)).each(function(){
					var element = $(this);
					
					// Skip fields with no default attribute
					if(element.data(plugin.settings.placeholderAttribute)=='')
						return;
					
					if(element.val()==element.data(plugin.settings.placeholderAttribute))
						element.val('');
				});
			})
			
		}

        var setPlaceholderText = function(element) {
            if(element.val()=='') {
				
				// Set the value to placeholder and add a class name
				element.val(element.data(plugin.settings.placeholderAttribute));
				element.addClass(plugin.settings.placeholderClass);
				
				// Change password field to text to see placeholder text
				if(element.data('original-type')=='password') {
					try {
						element.prop('type','text');
					}
					catch(e) {
						// Can't change the field type so remove placeholder text
						element.val('');
					}
				}
			}
        }
		
		var clearPlaceholderText = function(element) {
			if(element.val()==element.data(plugin.settings.placeholderAttribute)) {
				
				// Change password field back to password
				if(element.data('original-type')=='password') {					
					try {
						element.prop('type','password');
					}
					catch(e) {
						"Can't change text field to text in your browser.  Security issue I'm afraid";
					}					
				}
				
				// Clear the text and remove placeholder class
				element.val('');
				element.removeClass(plugin.settings.placeholderClass);
			}
		}

        init();
    }

})(jQuery);
