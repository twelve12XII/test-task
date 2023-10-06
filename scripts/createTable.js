function createImages(src) {
    const imgs = [];
    for (let i = 0; i < src.length; i++) {
        var img = document.createElement('img');
        img.src = 'src/bot-screen/' + src[i] + '.png';
        if (src[i] != null) {
            img.alt = src[i];
            img.title = src[i];
        }
        imgs.push(img);
    }
    return imgs;
};

function createText(src) {
    const text = [];
    for (let i = 0; i < src.length; i++) {
        text.push(document.createTextNode(src[i]));
    }
    return text;
};

function addTable() {
    const myTableDiv = document.getElementById("dynamicTable");
    const iconArr = createImages(['clock', 'toolbox', 'brittle', 'symbol', 'mana', 'memory', 'helper']);
    const nameArr = createText(['Игровое время', 'Запечатанный набор инструментов', 'Хрупкая чистая руна 10-й ступени', 'Большой символ изобилия творца', 'Мана-батарея', 'Модуль памяти', 'Помощник Вито']);
    const countArr = createText(['-', '1', '1', '10', '-', '-', '1']);
    const timeArr = createText(['30 дней', '1', '-', '-', '20', '10', '1']);
    const data = [iconArr, nameArr, countArr, timeArr];
    const table = document.createElement('TABLE');

    const tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (let i = 0; i < data[0].length; i++) {
        const tr = document.createElement('TR');
        tableBody.appendChild(tr);
        for (var j = 0; j < data.length; j++) {
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(data[j][i]);
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
}
addTable();