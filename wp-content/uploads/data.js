var botName = "Giornalbot",
botAvatar = "http://giornalistialmicrofono.it/wp-content/uploads/2020/05/amazon-robot-casa-e1590853750696.jpg",
conversationData = {"homepage": {1: { "statement": [ 
"Hey! Mi chiamo Giornalbot, sono l\'assistente del sito e del podcast Giornalisti al Microfono. Sono qui per darti una mano e qualche informazione.", 
"Prima ho qualche domanda", 
"Come ti chiami? (giusto per salutarti con il tuo vero nome)", 
], "input": {"name": "name", "consequence": 1.2}},1.2:{"statement": function(context) {return [ 
"Piacere di conoscerti, " + context.name  + "!", 
"Come puoi vedere, il sito è momentaneamente in manutenzione.", 
"Puoi comunque ascoltare tutte le puntate del podcast sulle principali piattaforme (Spotify, Apple Podcast, Google Podcast, Spreaker, etc.). Speriamo di tornare presto online!", 
"Vuoi essere avvisato quando ci saranno le prime novità?", 
];},"options": [{ "choice": "Sì, dimmi pure","consequence": 1.4},{ 
"choice": "Mmm, no non mi interessa","consequence": 1.5}]},1.4: { "statement": [ 
"Perfetto! Per favore lascia qui la tua mail, ti contatteremo. Non ti invieremo altri messaggi di spam o pubblicitari.", 
], "email": {"email": "email", "consequence": 1.6}},1.5: {"statement": function(context) {return [ 
"Mi dispiace, " + context.name  + " :( Ci vediamo la prossima volta, appena saremo di nuovo online!", 
];}},1.6: { "statement": [ 
"Benissimo! Grazie mille e ci sentiamo presto.", 
"Saluti!", 
]}}};