# 📸 Unsplash Images App

## Demo Live  https://unsplash-imagesapp.netlify.app/

![React-app](https://github.com/AlinaAMG/React-Projects/blob/unsplash-images/src/assets/unsplashImg.jpg)



Een moderne React-app waarmee je prachtige foto's kunt zoeken via de [Unsplash API](https://unsplash.com/developers).  
De app gebruikt **React Query**, **React Context**, en biedt ondersteuning voor **Dark/Light Mode**.  

---

## 🚀 Functionaliteiten
✅ **React Query + Axios**
- **Axios** wordt gebruikt om data op te halen van de Unsplash API.
- **React Query** beheert automatisch caching, refetching en laadtoestanden.
- Inclusief **React Query Devtools** voor debugging.


✅ **Zoekfunctionaliteit**
- Zoek naar willekeurige of specifieke afbeeldingen via de Unsplash API.
- Resultaten worden dynamisch weergegeven op basis van de zoekterm.

✅ **React Query**
- Data wordt opgehaald en gecachet met **React Query**.
- Automatische refetching en statusbeheer voor een soepele gebruikerservaring.
- Inclusief **React Query Devtools** voor debugging.

✅ **React Context**
- App-brede state wordt beheerd via **React.createContext** en **useContext**.
- De zoekterm en thema worden centraal opgeslagen.

✅ **Dark / Light Mode**
- De app past zich automatisch aan het systeemthema van de gebruiker aan (prefers-color-scheme).
- Gebruikers kunnen handmatig schakelen tussen Dark en Light Mode.

✅ **.env Environment Variables**
- API-sleutel is veilig opgeslagen in een `.env` bestand.
- Je gebruikt bijvoorbeeld:
  ```env
  VITE_UNSPLASH_API_KEY=your_api_key_here
  

 ## 🧩 Gebruikte technologieën

- ⚛️ React
- 🔍 React Query
- 🌐 Axios
- 🌐 Unsplash API
- 🧠 React Context
- 💡 Dark/Light Mode met CSS + JavaScript
- 🛠️ Vite 
- 🧰 React Query Devtools
