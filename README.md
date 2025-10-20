
# 🥂 Drink App

![React-app](https://github.com/AlinaAMG/React-Projects/blob/Drink-App/src/assets/mixmaster.png)

Een moderne **React Drink App** gebouwd met **React Query**, **React Router**, **Styled Components** en **React Toastify**.  
De app haalt drankjes  op uit een externe API, toont ze in een overzichtelijke interface en geeft gedetailleerde informatie over elke cocktail.  
Gebruikers kunnen ook inschrijven op een nieuwsbrief, waarbij de data naar een eigen backend wordt verstuurd.  
Dankzij caching met React Query laadt de app supersnel en werkt alles soepel.

## 🚀 Functionaliteiten

### 🧭 Navigatie en Routing
- Gemaakt met **React Router DOM v6**.
- Bevat meerdere pagina’s en een hoofd-layout:
  - `/` → **Startpagina (Landing)**
  - `/cocktail/:id` → **Details van één cocktail**
  - `/newsletter` → **Nieuwsbriefpagina**
  - `/about` → **Over-pagina**
  - Aparte foutafhandeling via **Error** en **SinglePageError** componenten.
- Een **_redirects** bestand in de `public` map zorgt ervoor dat routes goed werken bij publicatie (zoals op Netlify).

### 🍹 Data ophalen en cachen
- Gebruikt **React Query** om drankjes op te halen uit een externe cocktail-API.
- Maakt gebruik van **ensureQueryData()** om resultaten te cachen voor snellere laadtijden.
- Bevat nette foutafhandeling bij netwerk- of API-fouten.

### 🔍 Zoeken
- Gebruikers kunnen drankjes zoeken via een **zoekterm in de URL**.
- De resultaten worden dynamisch gefilterd en efficiënt geladen.

### 💌 Nieuwsbrief
- Een **formuliercomponent** laat gebruikers hun e-mailadres invullen om zich in te schrijven.
- De gegevens worden verstuurd naar een **Node.js backend** op `localhost:5000/newsletter` via **CORS**.
- Zowel **frontend- als backendvalidatie** zorgen dat de data correct is.
- Bij succes verschijnt een melding via **React Toastify**.

### 🎨 Styling
- Gestyled met **Styled Components** voor herbruikbare en overzichtelijke CSS.
- Volledig **responsive** ontwerp met een moderne uitstraling.

### 🔗 Navigatiebalk
- Een **Navbar**-component met `NavLink` zorgt voor navigatie tussen de pagina’s.
- De actieve route wordt automatisch gemarkeerd.


## ⚙️ Gebruikte technologieën

| Categorie | Technologie |
|------------|-------------|
| Frontend | React |
| Data ophalen | React Query |
| Routing | React Router DOM |
| Styling | Styled Components |
| Notificaties | React Toastify |
| Iconen | React Icons |
| Backend | Node.js + Express |
| Cross-Origin Requests | CORS |
| Hosting | Netlify (met `_redirects` bestand) |


## 🧠 Werking van de app

1. **Landingpagina**  
   Haalt drankjes op via React Query en toont ze op de homepage.  
   De gebruiker kan zoeken via een zoekterm in de URL, waardoor de resultaten worden gefilterd.

2. **Cocktail detailpagina**  
   Toont details van één specifieke cocktail via een dynamische route (`/cocktail/:id`).

3. **Nieuwsbriefpagina**  
   - Bevat een formulier om een e-mailadres in te voeren.  
   - Stuurt de data naar de backend via CORS.  
   - Geeft feedback met React Toastify (bij succes of foutmelding).

4. **Foutafhandeling**  
   - Pagina’s met fouten tonen een nette melding via de componenten `Error` of `SinglePageError`.

5. **_redirects bestand**  
   Bevindt zich in de **public/** map:

   Dit zorgt ervoor dat **React Router** correct blijft werken na deployment (bijv. op Netlify).  
    Zo blijven routes zoals `/cocktail/:id` toegankelijk, ook bij herladen van de pagina.
