Ecco il file completo e aggiornato con la struttura esatta per il lancio del nuovo menù.

* Le vecchie categorie sono state sostituite con le nuove sezioni: "I Grandi Classici", "Le Nostre Storiche Rivisitate" e "Le Specialità San Francisco".


* È stata creata una categoria specifica per "Le Aggiunte" e aggiornata la lista de "Le Bibite".


* I prezzi sono stati allineati ai nuovi formati per le varianti Tonda e Maxi. Il valore `taglio` è stato mantenuto a `null` ovunque per non rompere il design dell'interfaccia, in quanto non presente nel listino di ottobre.


* Tutti i nuovi ingredienti (come la crema di burrata pugliese, il cremoso di zucca e l'origano Wiberg) sono stati tradotti in inglese per mantenere funzionante il sistema bilingue del sito.



Copia tutto il blocco di codice qui sotto e incollalo sostituendo interamente il contenuto del tuo file `menu.js` (o `menu.ts`).

```javascript
// Full menu of Pizzeria San Francisco — updated for October 1st Launch
// Prices in EUR. When a size is not offered, use null.
// Sizes: tonda (round pizza), taglio (by the slice), maxi (large family)

export const menuCategories = [
  { id: "classici", it: "I Grandi Classici", en: "The Great Classics" },
  { id: "storiche", it: "Le Nostre Storiche Rivisitate", en: "Historic Revisited" },
  { id: "specialita", it: "Le Specialità San Francisco", en: "San Francisco Specialties" },
  { id: "aggiunte", it: "Le Aggiunte", en: "Extras & Additions" },
  { id: "bibite", it: "Le Bibite", en: "Drinks" },
];

export const menu = {
  classici: [
    { name: "Schiacciata", it: "Base di pasta farcita a crudo, olio EVO", en: "Pizza base with fresh toppings, EVO oil", tonda: 3.5, taglio: null, maxi: null },
    { name: "Marinara", it: "Doppia salsa di pomodoro, origano Wiberg, aglio, olio EVO", en: "Double tomato sauce, Wiberg oregano, garlic, EVO oil", tonda: 4.5, taglio: null, maxi: null },
    { name: "Margherita", it: "Polpa di pomodoro, fior di latte, basilico fresco", en: "Tomato pulp, fior di latte, fresh basil", tonda: 6.0, taglio: null, maxi: 22.0 },
    { name: "Funghi", it: "Polpa di pomodoro, fior di latte, champignon freschi", en: "Tomato pulp, fior di latte, fresh champignon mushrooms", tonda: 7.0, taglio: null, maxi: 24.0 },
    { name: "Prosciutto Cotto", it: "Polpa di pomodoro, fior di latte, prosciutto cotto", en: "Tomato pulp, fior di latte, cooked ham", tonda: 7.5, taglio: null, maxi: 25.0 },
    { name: "Würstel", it: "Polpa di pomodoro, fior di latte, würstel", en: "Tomato pulp, fior di latte, hot dog", tonda: 7.5, taglio: null, maxi: 25.0 },
    { name: "Chips", it: "Polpa di pomodoro, fior di latte, patatine fritte", en: "Tomato pulp, fior di latte, french fries", tonda: 7.5, taglio: null, maxi: 25.0 },
    { name: "Salamino Piccante", it: "Polpa di pomodoro, fior di latte, salamino piccante", en: "Tomato pulp, fior di latte, spicy salami", tonda: 7.5, taglio: null, maxi: 25.0 },
    { name: "Tastasal", it: "Polpa di pomodoro, fior di latte, tastasal", en: "Tomato pulp, fior di latte, tastasal (local sausage)", tonda: 7.5, taglio: null, maxi: 25.0 },
    { name: "Crudo", it: "Polpa di pomodoro, fior di latte, prosciutto crudo stagionato", en: "Tomato pulp, fior di latte, aged cured ham", tonda: 9.0, taglio: null, maxi: 29.0 },
    { name: "Bufala Campana DOP", it: "Polpa di pomodoro, mozzarella di bufala, basilico fresco, Olio EVO", en: "Tomato pulp, buffalo mozzarella, fresh basil, EVO oil", tonda: 8.0, taglio: null, maxi: 26.0 },
    { name: "Prosciutto e Funghi", it: "Polpa di pomodoro, fior di latte, prosciutto cotto, champignon freschi", en: "Tomato pulp, fior di latte, cooked ham, fresh champignon mushrooms", tonda: 8.5, taglio: null, maxi: 28.0 },
    { name: "Tonno e Cipolla Caramellata", it: "Polpa di pomodoro, fior di latte, tonno in olio EVO, cipolla rossa caramellata", en: "Tomato pulp, fior di latte, tuna in EVO oil, caramelized red onion", tonda: 8.5, taglio: null, maxi: 27.0 },
    { name: "Napoletana", it: "Polpa di pomodoro, fior di latte, filetti di acciughe, capperi, origano Wiberg", en: "Tomato pulp, fior di latte, anchovy fillets, capers, Wiberg oregano", tonda: 8.0, taglio: null, maxi: 26.0 },
    { name: "Vegetariana", it: "Polpa di pomodoro, fior di latte, melanzane e zucchine al forno, friarielli, radicchio stufato al vino", en: "Tomato pulp, fior di latte, roasted aubergines and zucchini, friarielli, wine-stewed radicchio", tonda: 9.5, taglio: null, maxi: 30.0 },
    { name: "Cinque Formaggi", it: "Polpa di pomodoro, fior di latte, gorgonzola, ricotta fresca, Philadelphia, Grana Padano DOP grattugiato", en: "Tomato pulp, fior di latte, gorgonzola, fresh ricotta, cream cheese, grated Grana Padano DOP", tonda: 9.5, taglio: null, maxi: 30.0 },
    { name: "Quattro Salumi", it: "Polpa di pomodoro, fior di latte, salamino piccante, tastasal, würstel, prosciutto cotto", en: "Tomato pulp, fior di latte, spicy salami, tastasal, hot dog, cooked ham", tonda: 10.0, taglio: null, maxi: 32.0 },
    { name: "Capricciosa", it: "Polpa di pomodoro, fior di latte, prosciutto cotto, champignon freschi, carciofi a fette, capperi, olive Leccino denocciolate", en: "Tomato pulp, fior di latte, cooked ham, fresh champignon, sliced artichokes, capers, pitted Leccino olives", tonda: 10.0, taglio: null, maxi: 32.0 },
    { name: "Calzone", it: "Polpa di pomodoro, fior di latte, prosciutto cotto, champignon freschi, ricotta fresca", en: "Tomato pulp, fior di latte, cooked ham, fresh champignon, fresh ricotta", tonda: 9.5, taglio: null, maxi: null },
  ],
  storiche: [
    { name: "Fresca", it: "Base di pasta farcita a crudo, mozzarella di bufala, pomorini Cirio, rucola, olio EVO", en: "Cold-topped base, buffalo mozzarella, Cirio cherry tomatoes, rocket, EVO oil", tonda: 8.5, taglio: null, maxi: null },
    { name: "Parmigiana", it: "Polpa di pomodoro, fior di latte, melanzane al forno, Grana Padano DOP grattugiato, basilico fresco", en: "Tomato pulp, fior di latte, roasted aubergines, grated Grana Padano DOP, fresh basil", tonda: 8.5, taglio: null, maxi: 26.0 },
    { name: "Delicata", it: "Polpa di pomodoro, fior di latte, zucchine, stracchino, basilico fresco", en: "Tomato pulp, fior di latte, zucchini, stracchino cheese, fresh basil", tonda: 9.0, taglio: null, maxi: 29.0 },
    { name: "Estate", it: "Polpa di pomodoro, mozzarella di bufala, pomorini Cirio, rucola", en: "Tomato pulp, buffalo mozzarella, Cirio cherry tomatoes, rocket", tonda: 9.5, taglio: null, maxi: 30.0 },
    { name: "Gustosa", it: "Fior di latte, patate dorate al forno, cipolla rossa caramellata, tastasal, gorgonzola", en: "Fior di latte, golden roasted potatoes, caramelized red onion, tastasal, gorgonzola", tonda: 9.5, taglio: null, maxi: 30.0 },
    { name: "Tirolese", it: "Polpa di pomodoro, fior di latte, patate dorate al forno, Monte Veronese, funghi porcini, speck in cottura", en: "Tomato pulp, fior di latte, golden roasted potatoes, Monte Veronese cheese, porcini mushrooms, baked speck", tonda: 10.5, taglio: null, maxi: 34.0 },
    { name: "Valtellina", it: "Polpa di pomodoro, fior di latte, bresaola, rucola, scaglie di Grana Padano DOP", en: "Tomato pulp, fior di latte, bresaola, rocket, Grana Padano DOP flakes", tonda: 10.0, taglio: null, maxi: 32.0 },
    { name: "Hellas", it: "Polpa di pomodoro, fior di latte, prosciutto cotto, patate dorate al forno, zucchine, stracchino", en: "Tomato pulp, fior di latte, cooked ham, golden roasted potatoes, zucchini, stracchino cheese", tonda: 10.0, taglio: null, maxi: 32.0 },
    { name: "Kevin", it: "Polpa di pomodoro, fior di latte, patate dorate al forno, tastasal, Philadelphia", en: "Tomato pulp, fior di latte, golden roasted potatoes, tastasal, cream cheese", tonda: 9.5, taglio: null, maxi: 30.0 },
    { name: "Mauri", it: "Polpa di pomodoro, fior di latte, prosciutto cotto, tastasal, gorgonzola, ricotta fresca, Grana Padano DOP grattugiato, origano Wiberg", en: "Tomato pulp, fior di latte, cooked ham, tastasal, gorgonzola, fresh ricotta, grated Grana Padano DOP, Wiberg oregano", tonda: 10.5, taglio: null, maxi: 34.0 },
    { name: "Adriana", it: "Polpa di pomodoro, fior di latte, melanzane al forno, champignon freschi, Philadelphia", en: "Tomato pulp, fior di latte, roasted aubergines, fresh champignon, cream cheese", tonda: 9.0, taglio: null, maxi: 29.0 },
    { name: "Alessandro", it: "Polpa di pomodoro, fior di latte, funghi porcini, speck, scaglie di Grana Padano DOP", en: "Tomato pulp, fior di latte, porcini mushrooms, speck, Grana Padano DOP flakes", tonda: 10.0, taglio: null, maxi: 32.0 },
    { name: "Americana", it: "Polpa di pomodoro, fior di latte, würstel, patatine fritte", en: "Tomato pulp, fior di latte, hot dog, french fries", tonda: 8.5, taglio: null, maxi: 27.0 },
    { name: "Angelika", it: "Polpa di pomodoro, fior di latte, zucchine, Philadelphia, salamino piccante, pomodorini Cirio", en: "Tomato pulp, fior di latte, zucchini, cream cheese, spicy salami, Cirio cherry tomatoes", tonda: 10.0, taglio: null, maxi: 32.0 },
    { name: "Casanova", it: "Polpa di pomodoro, fior di latte, melanzane al forno, funghi porcini, salamino piccante, scaglie di Grana Padano DOP", en: "Tomato pulp, fior di latte, roasted aubergines, porcini mushrooms, spicy salami, Grana Padano DOP flakes", tonda: 10.5, taglio: null, maxi: 34.0 },
    { name: "Contessa", it: "Polpa di pomodoro, fior di latte, cipolla rossa di Tropea, zucchine, tastasal, ricotta fresca", en: "Tomato pulp, fior di latte, Tropea red onion, zucchini, tastasal, fresh ricotta", tonda: 9.5, taglio: null, maxi: 30.0 },
    { name: "Daniele", it: "Polpa di pomodoro, fior di latte, gorgonzola, cipolla rossa caramellata, speck in cottura", en: "Tomato pulp, fior di latte, gorgonzola, caramelized red onion, baked speck", tonda: 9.5, taglio: null, maxi: 30.0 },
    { name: "Sergio", it: "Polpa di pomodoro, fior di latte, cipolla rossa caramellata, tastasal, salame piccante, Monte Veronese", en: "Tomato pulp, fior di latte, caramelized red onion, tastasal, spicy salami, Monte Veronese cheese", tonda: 10.5, taglio: null, maxi: 32.0 },
  ],
  specialita: [
    { name: "Bassone", it: "Polpa di pomodoro, filetti di acciughe, capperi, olive Leccino denocciolate, crema di burrata pugliese, basilico fresco, origano Wiberg", en: "Tomato pulp, anchovy fillets, capers, pitted Leccino olives, Apulian burrata cream, fresh basil, Wiberg oregano", tonda: 10.0, taglio: null, maxi: 32.0 },
    { name: "Balconi", it: "Fior di latte, Monte Veronese, speck in cottura, ricotta fresca, noci dorate al forno, miele di Acacia", en: "Fior di latte, Monte Veronese cheese, baked speck, fresh ricotta, golden roasted walnuts, Acacia honey", tonda: 10.5, taglio: null, maxi: 33.0 },
    { name: "Bussolengo", it: "Fior di latte, cremoso di zucca, tastasal, funghi porcini, scaglie di Grana Padano DOP", en: "Fior di latte, pumpkin cream, tastasal, porcini mushrooms, Grana Padano DOP flakes", tonda: 10.5, taglio: null, maxi: 33.0 },
    { name: "Pescantina", it: "Polpa di pomodoro, fior di latte, radicchio stufato al vino, Philadelphia, gorgonzola", en: "Tomato pulp, fior di latte, wine-stewed radicchio, cream cheese, gorgonzola", tonda: 10.0, taglio: null, maxi: 32.0 },
    { name: "San Francisco", it: "Polpa di pomodoro, fior di latte, funghi porcini, gorgonzola, tastasal, prosciutto crudo stagionato", en: "Tomato pulp, fior di latte, porcini mushrooms, gorgonzola, tastasal, aged cured ham", tonda: 11.0, taglio: null, maxi: 35.0 },
    { name: "San Vito al Mantico", it: "Fior di latte, friarielli, tastasal, Monte Veronese", en: "Fior di latte, friarielli, tastasal, Monte Veronese cheese", tonda: 9.5, taglio: null, maxi: 31.0 },
    { name: "TG San Vi", it: "Polpa di pomodoro, fior di latte, salamino piccante, melanzane al forno, cipolla rossa caramellata, crema di burrata pugliese", en: "Tomato pulp, fior di latte, spicy salami, roasted aubergines, caramelized red onion, Apulian burrata cream", tonda: 10.5, taglio: null, maxi: 34.0 },
  ],
  aggiunte: [
    { name: "Doppia Pasta", it: "Aggiunta doppia pasta", en: "Double dough", tonda: 1.5, taglio: null, maxi: null },
    { name: "Abbondante", it: "Aggiunta dose abbondante di ingredienti", en: "Extra toppings portion", tonda: 2.5, taglio: null, maxi: 8.0 },
    { name: "Impasto Speciale", it: "Richiesta impasto speciale", en: "Special dough request", tonda: 1.0, taglio: null, maxi: 4.0 },
    { name: "Aggiunte Classiche", it: "Aggiunta ingredienti classici", en: "Classic toppings addition", tonda: 1.5, taglio: null, maxi: 5.0 },
    { name: "Aggiunte Premium", it: "Crema di burrata pugliese, crudo stagionato, speck, bufala, funghi porcini", en: "Apulian burrata cream, aged cured ham, speck, buffalo mozzarella, porcini", tonda: 2.5, taglio: null, maxi: 8.0 },
    { name: "Mozzarella Senza Lattosio", it: "Sostituzione con mozzarella senza lattosio", en: "Lactose-free mozzarella substitution", tonda: 1.5, taglio: null, maxi: 5.0 },
    { name: "Riduzioni Ingredienti", it: "Rimozione di uno o più ingredienti", en: "Removal of one or more toppings", tonda: -0.5, taglio: null, maxi: -2.0 },
    { name: "Riduzione Pizza Baby", it: "Formato pizza ridotto per bambini", en: "Reduced pizza size for children", tonda: -0.5, taglio: null, maxi: null },
  ],
  bibite: [
    { name: "Acqua 50cl", it: "Naturale o Frizzante", en: "Still or Sparkling", tonda: 1.5, taglio: null, maxi: null },
    { name: "Bibite 33cl", it: "In lattina", en: "Canned soft drinks", tonda: 2.5, taglio: null, maxi: null },
    { name: "Coca Cola 1L", it: "In bottiglia", en: "Bottled", tonda: 4.0, taglio: null, maxi: null },
    { name: "Coca Cola Zero 1L", it: "In bottiglia", en: "Bottled", tonda: 4.0, taglio: null, maxi: null },
    { name: "Birra in Bottiglia 33cl", it: "Birra", en: "Beer", tonda: 3.0, taglio: null, maxi: null },
    { name: "Birra in Bottiglia 66cl", it: "Birra", en: "Beer", tonda: 4.0, taglio: null, maxi: null },
  ],
};

export const info = {
  name: "Pizzeria San Francisco",
  address: "Piazzetta Donatori di Sangue, 2, San Vito Al Mantico, Bussolengo (VR)",
  phone: "+39 331 149 2875",
  phoneDisplay: "331 149 2875",
  phoneHref: "tel:+393311492875",
  hours: [
    { day_it: "Lunedì", day_en: "Monday", slots: ["18:00 – 21:30"] },
    { day_it: "Martedì", day_en: "Tuesday", slots: ["18:00 – 21:30"] },
    { day_it: "Mercoledì", day_en: "Wednesday", slots: ["18:00 – 21:30"] },
    { day_it: "Giovedì", day_en: "Thursday", slots: ["18:00 – 21:30"] },
    { day_it: "Venerdì", day_en: "Friday", slots: ["18:00 – 22:00"] },
    { day_it: "Sabato", day_en: "Saturday", slots: ["18:00 – 22:00"] },
    { day_it: "Domenica", day_en: "Sunday", slots: ["18:00 – 21:30"] },
  ],
};
```
