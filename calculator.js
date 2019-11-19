{
    // 声明创建按钮函数
    function createButton(text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        container.appendChild(button);
        return button;
    }
    // 创建 container
    var container_1 = document.createElement('div');
    container_1.classList.add('calculator');
    document.body.appendChild(container_1);
    // 创建 output
    var output = document.createElement('div');
    output.classList.add('output');
    // 创建 output 里的 span
    var span_1 = document.createElement('span');
    span_1.textContent = '0';
    output.appendChild(span_1);
    container_1.appendChild(output);
    // 声明 n1 n2 operator
    var n1_1;
    var n2_1;
    var operator_1;
    // 监听 container
    container_1.addEventListener('click', function (event) {
        if (event.target instanceof HTMLButtonElement) {
            var button = event.target;
            var text = button.textContent;
            // 判断字符类型
            if ('0123456789'.indexOf(text) >= 0) {
                if (operator_1) {
                    // 更新 n2
                    if (n2_1) {
                        n2_1 = parseInt(n2_1.toString() + text);
                    }
                    else {
                        n2_1 = parseInt(text);
                    }
                    span_1.textContent = n2_1.toString();
                }
                else {
                    // 更新 n1
                    if (n1_1) {
                        n1_1 = parseInt(n1_1.toString() + text);
                    }
                    else {
                        n1_1 = parseInt(text);
                    }
                    span_1.textContent = n1_1.toString();
                }
            }
            else if ('+-×÷'.indexOf(text) >= 0) {
                // 更新 operator
                operator_1 = text;
            }
            else if ('='.indexOf(text) >= 0) {
                // 更新结果
                var result = void 0;
                if (operator_1 === '-') {
                    result = n1_1 - n2_1;
                }
                else if (operator_1 === '+') {
                    result = n1_1 + n2_1;
                }
                else if (operator_1 === '×') {
                    result = n1_1 * n2_1;
                }
                else if (operator_1 === '÷') {
                    result = n1_1 / n2_1;
                }
                span_1.textContent = result.toString();
            }
        }
    });
    // 声明所有按钮
    var keys = [
        ['Clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    // 按钮放到 container 里
    keys.forEach(function (textList) {
        var div = document.createElement('div');
        div.classList.add('row');
        textList.forEach(function (text) {
            createButton(text, div, "button text-" + text);
        });
        container_1.appendChild(div);
    });
}
