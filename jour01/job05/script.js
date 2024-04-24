function JoursSemaine() {
  const JoursSemaines = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  for (let i = 0; i < JoursSemaines.length; i++) {
    let day = document.createElement('p');
    day.textContent = JoursSemaines[i];
    document.getElementById('Jours').getElementById('Jours'.appendChild(day));
  }
}
