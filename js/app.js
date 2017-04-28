// OGÓLNA FUNKCJA
var baseUrl = 'https://kodilla.com/pl/bootcamp-api',
	myHeaders = {
		'X-Client-Id': 1723,
		'X-Auth-Token': '90f170b0c8263d6a8a5f8862a1a3c147'
	};

$.ajaxSetup({
	headers: myHeaders
});

//board downloading
$.ajax({
	url: baseUrl + '/board',
	method: 'GET',
	success: function(res) {
		setupColumns(res.columns);
	}
});

function setupColumns(columns) {
	columns.forEach(function(item) {
		var col = new Column(item.id, item.name);
		board.createColumn(col);
		setupCards(col, item.cards);
	});
};

function setupCards(col, cards) {
	cards.forEach(function(item) {
		var card = new Card(item.id, item.name, item.bootcamp_kanban_column_id)
		col.createCard(card);
	});
};
