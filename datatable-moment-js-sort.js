<script type="text/javascript">
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"moment-js-date-pre": function ( a ) {
			//Parse local date into a Moment.JS object and return it's timestamp
			return moment(a, 'L').unix();
		},
		"moment-js-date-asc": function ( a, b ) {
			return a - b;
		},
		"moment-js-date-desc": function ( a, b ) {
			return b-a;
		}
	});
</script>