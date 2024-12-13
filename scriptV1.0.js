// Bazinė scripto versija 1.0.

function greetCustomer(name) {
  // Customer Data:
  let customerData = {
    'Joe': {
      visits: 1
    },
    'Carol': {
      visits: 2
    },
    'Howard': {
      visits: 3
    },
    'Carrie': {
      visits: 4
    }
  };

  // Tikriname ar klientas yra sąraše:
  if(!customerData[name]) {
    return 'Welcome to the North Pole Café! Is this your first time? ❄️'
  }
  // Jeigu klientas yra sąraše, išsiaiškiname kiek kartų buvo apsilankęs ir priskiriame jam kintamajį:
  else {
    let visits = customerData[name].visits;

    // Tikriname ar kliento apsilankymų skaičius lygus 1:
    if (visits === 1) {
      return `Ho ho ho! Welcome back, ${name}! We’re glad you enjoyed your first visit! 🎅`;
    } else {
      return `Merry greetings, ${name}! So wonderful to see you again! 🎄`;
    }
  }
}

console.log(greetCustomer('Martynas'));
console.log(greetCustomer('Joe'));
console.log(greetCustomer('Carol'));
