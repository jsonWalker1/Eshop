# Eshop
Experimentální projekt - eshop 


Tento projekt je zaměřen na vytvoření eshopu, kde se sortiment generuje dynamicky pomocí JavaScriptu a později bude napojen na backendovou logiku v Node.js s databázovým řešením. Cílem je mít systém, který umožní snadné přidávání produktů do databáze, jejich zobrazení na stránce a budoucí manipulaci s daty, jako je filtrování, třídění nebo přidávání do košíku.

Funkcionalita
Frontend:

Dynamické generování produktů:
Produkty jsou aktuálně definované v JavaScriptu jako pole objektů a vykreslují se pomocí innerHTML do stránky.

Zobrazení produktů:
Každý produkt obsahuje:
Název
Obrázek
Popis

Struktura HTML:
Každý produkt má samostatný blok s tlačítkem pro potenciální další akce (např. zobrazení detailu, přidání do košíku).
Backend (zatím plánovaný):

Node.js server:
Server zajišťuje komunikaci mezi databází a frontendem. Data o produktech budou poskytována prostřednictvím API endpointů.
Databázová podpora:
Produkty budou uloženy v databázi (pravděpodobně MongoDB nebo MySQL). Backend bude poskytovat CRUD operace (vytvoření, čtení, úprava, mazání).

Budoucí funkce:
Napojení na databázi:
Obsah sortimentu bude načítán z databáze, což umožní snadnou údržbu a aktualizaci produktů.
Filtrovatelný obsah:
Možnost třídit produkty podle různých kritérií, jako je cena, dostupnost nebo kategorie.
Košík a objednávky:
Systém pro správu košíku a odesílání objednávek.

Aktuální stav projektu

Frontend:
Produkty jsou definovány v JavaScriptu jako pole objektů.
Používá se metoda forEach k dynamickému generování HTML obsahu.
Produkty jsou vykreslovány do DOMu pomocí innerHTML.

Backend:
Node.js server je připraven, ale zatím není napojen na databázi.
API endpointy zatím nejsou implementovány.
