# 🧳 Tours App

![App Screenshot](https://github.com/AlinaAMG/React-Projects/blob/tours-app/public/tours.jpg)

Een kleine React-applicatie waarin je een lijst met tours kunt bekijken, verwijderen en opnieuw laden.  

## 📌 Functionaliteiten

- **Data Fetching**: De app haalt de tours op van een externe API met `fetch`.
- **React State**: De data wordt opgeslagen en beheerd met `useState`.
- **Weergave met `map`**: Elke tour wordt weergegeven met naam, informatie en prijs.
- **Info inkorten**: Alleen de eerste 200 characters van de info worden getoond.  
  Met een **Read More / Show Less** knop kan de volledige tekst worden in- of uitgeklapt.
- **Remove Button**: Elke tour heeft een knop om deze uit de lijst te verwijderen.
- **Refresh Button**: Als alle tours verwijderd zijn, verschijnt er een knop om de data opnieuw op te halen.
- **CSS Styling**: De app is voorzien van eigen stijlen voor een nette en gebruiksvriendelijke interface.

## 🖼️ UI Voorbeeld

- **Tours List**:  
  - Naam van de tour  
  - Informatie (met Read More / Show Less toggle)  
  - Prijs  
  - `Remove` knop  

## 🚀 Gebruikte technieken

- React
- `fetch` API
- `useState` en `useEffect`
- Conditional rendering
- Array `map` methode
- State toggle voor **Read More / Show Less**
- CSS modules / eigen styles
