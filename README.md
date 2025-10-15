# Strapi Submenus React App

## Live Demo   https://strapi-submenu-app.netlify.app/

![React-app](https://github.com/AlinaAMG/React-Projects/blob/strapi-submenus/src/assets/strapi.jpg)


Dit is een **React-app** die een dynamische navigatiebalk met submenus implementeert, gebaseerd op **Strapi data**. De app ondersteunt **responsive design** en interactieve functionaliteiten voor verschillende schermgroottes.


## 📦 Features

- **Responsive Navbar**
  - Op **kleine schermen** (mobiel/tablet) wordt een **hamburger-menu** getoond.  
  - Op **grotere schermen** (min-width 992px) worden de links direct in de navbar getoond.  

- **Dynamische Submenus**
  - Submenus worden opgehaald uit een **data.jsx** bestand.  
  - Ondersteuning voor **hover op desktop**: submenu verschijnt bij muisaanwijzer.  
  - Ondersteuning voor **click/toggle op mobiel**: submenu opent en sluit bij het tikken.  
  - **Dynamische hoogteberekening:** gebruik van `getBoundingClientRect` om de exacte hoogte van submenus te meten en soepele open/close animaties te ondersteunen.  

- **Gebruik van moderne React-tools**
  - **useContext** voor state management van submenu open/close.  
  - **useRef** en **getBoundingClientRect** voor dynamische submenuhoogtes.  
  - **React Icons** voor de hamburger menu en eventuele submenu-iconen.  

- **Styling**
  - CSS is inbegrepen voor responsive toggling en animaties.  
  - Makkelijk aan te passen voor eigen branding en thema’s.  

---

## 🛠️ Technologieën

- React  
- React Icons  
- CSS (voor responsive styling en animaties)  
- useContext & useRef  
- getBoundingClientRect (voor dynamische submenuhoogtes)  
