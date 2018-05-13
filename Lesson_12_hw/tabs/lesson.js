//Технология AJAX
//Asynchronous JavaScript and XML

//AJAX - технология !фонового! выполнения запроса(обмена данными с сервером)

//Преимущества
//	UX + скорость работы
//	Объем передаваемого трафика
//  Снижение нагрузки на сервер

//Способы 
//	IFrame
//	Img - тег,картинка
//	HTTP tags


var xhr = new XMLHttpRequest;
//события
	xhr.load
    xhr.error - при возникновении ошибки(серверной, напр. ошибка 404)
	xhr.readystatechange - возникает когда меняется состояние объекта xhr
	xhr.timeout - возникает по окончании времени выполнения запроса
	xhr.abort - возникает когда запрос прерван

//методы
	xhr.abort()
	xhr.setRequestHeader(header,value) - можно задать заголовок запроса до его отправки
	xhr.getAllResponseHeaders() - после завершения запроса вернет все заголовки ответа сервера

//поля, свойства
	xhr.timeout - лимит на время выполнения
	xhr.responseText - хранит строку, загруженную при помощи запроса
	xhr.readystate - целое число - 0, 1, 2, 3, или 4
		0 - статус
		1 - после инициализации (.open)
		2 - когда были получены заголовки
		3 - получен кусочек тела ответа
		4 - запрос завершен
	xhr.status - целое число, http код ответа сервера