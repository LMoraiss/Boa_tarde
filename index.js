let num = [];

console.log("Digite dois números para calcularmos o MMC entre eles");

process.stdin.on("data", function (data) {
    num.push(parseInt(data.toString().trim()));
    
    if (num.length === 2) {
        const num1 = num[0];
        const num2 = num[1];

        function calcularMDC(a, b) {
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }

        function calcularMMC(a, b) {
            return (a * b) / calcularMDC(a, b);
        }

        const mmc = calcularMMC(num1, num2);
        console.log(`O MMC de ${num1} e ${num2} é ${mmc}.`);
        
        process.stdin.pause(); // Para parar de ler a entrada do usuário
    }
});
