jquery-form-placeholders
========================

Allows form fields to have placeholder text.  Placeholder text is the default text shown to visitors in a form field; it is cleared once they click into the field.  
This plugin makes is easy to add placeholder text to your forms, and support the following field types:

1. Text
1. Textarea
1. Email
1. Password (not supported in IE <= 8)

Usage
-----

1.  Include the plugin on your page
1.  Add an attribute called **data-placeholder** to your form fields
1.  Initialise the plugin

Example
-------

    <script type="text/javascript" src="jquery.form-placeholders.js"></script>

    <form action="#" method="post">
        <div>
            <input type="text" data-placeholder="This is placeholder text" />
        </div>
        <div>
            <input type="email" data-placeholder="Enter a valid email address" />
        </div>
        <div>
            <textarea data-placeholder="Enter a message"></textarea>
        </div>
        <div>
            <input type="password" data-placeholder="Even works on password fields" />
        </div>
    </form>

    $(document).ready(function(){
    	new $.cubeFormPlaceholders($('form'));
    });
    
Credits
-------

Built using the jQuery Plugin Boilerplate by Stefan Gabos (http://stefangabos.ro/jquery/jquery-plugin-boilerplate-oop/)