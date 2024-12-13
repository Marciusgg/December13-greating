// Antra script'o versija. Siekta, kad nauji klientai ir jų apsilankymas saugotūsi.
// Norint pasiekti, kad kleintai ir jų apsilankymai saugotūsi reikia sukurti html, kad nauji duomenys saugotūsi naršyklėje. Svarbu pabrėžti, kad perkrovus html sukaupti duomenys išsitrins ir naujus duomenis reiktų saugoti duomenų bazėje.
// Norit, kad nauji duomenys saugotūsi 'customerData' reikia apibrėžti prieš funkciją.
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

function greetCustomer() {
  // Nustatome html dokumento laukams priskiriame kintamuosius:
  const nameInput = document.getElementById('customerName');
  // Priskiriant įvestą vardą kintamajam nuo įvesties pašaliname tarpus iš abiejų pusių naudojant .trim():
  const name = nameInput.value.trim();
  const greeting = document.getElementById('greeting');

  // Tikriname ar į 'input' laukelį buvo įvesti duomenys:
  if (!name) {
    greeting.innerHTML = 'Please enter a name!';
    return;
  }
  // Tikriname ar klientas yra sąraše:
  if(!customerData[name]) {
    // Pridedame naują vizita prie 'customerData':
    customerData[name] = { visits: 1 };
    greeting.innerHTML = `Welcome to the North Pole Café, ${name}! Is this your first time? ❄️`
  }
  // Jeigu klientas yra sąraše, išsiaiškiname kiek kartų buvo apsilankęs ir priskiriame jam kintamajį:
  else {
    let visits = customerData[name].visits;
    // Pridedamas naujas visitas prie jau turimų duomenų:
    customerData[name].visits++;
    // Tikriname ar kliento apsilankymų skaičius lygus 1:
    if (visits === 1) {
      greeting.innerHTML = `Ho ho ho! Welcome back, ${name}! We’re glad you enjoyed your first visit! 🎅`;
    } else {
      greeting.innerHTML = `Merry greetings, ${name}! So wonderful to see you again! 🎄`;
    }
  }
  // Po kiekvieno įvedimo išvalome 'input' laukelį:
  nameInput.value = ''
}