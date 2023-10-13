//  Controle de Anos de Experriencia
class ExperianceCounter {
    counter = 2;
    constructor() {
       return this.calculator();
    }

    calculator()
    {
        const year = new Date();
        if(year.getMonth() === 0)
        {
            counter++;
        }
    }
}
// Gerando Instância
  const instanceExperianceCounter = new ExperianceCounter();
// Passando dado para o template.

// resgate do elemento de contagem:
  const countElement = document.getElementById('count');
  countElement.innerHTML = instanceExperianceCounter.counter;