# Datatable Moment-JS Sort Plugin

A plugin to sort local-date strings in Datatable.

This helps when having a local date string like `25.01.2015` that should be sortable. 
By default datatable is sorting the date-string as a string, not as a date because it is using the returned value from `render` to sort the rows.

What datatables is doing:

- 31.10.2014
- 31.10.2013
- 31.07.2014

What the plugin is doing:


- 31.10.2013
- 31.07.2014
- 31.10.2014

# Example

```JS
$('#table').DataTable({
			data: _mydata,
			columns: [
				{
					data: 'make',
					title: 'Make'
				},{
					data: 'model',
					title: 'Model'
				},{
					data: 'year',
					title: 'Year'
				},{
					data: 'manifacturedate',
					title: 'Manifacture Date',
					render: function(data, type, row){
						//You need to have moment.js to parse the date into a local date
						return moment(data).format('L');
					},
					"type": "moment-js-date" 
				}
			]
		});
	}
```

# Links

Fore more information please see:

- https://datatables.net/reference/option/columns.type
- https://www.datatables.net/plug-ins/sorting/