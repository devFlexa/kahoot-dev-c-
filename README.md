# CodeQuest C#

Quiz de C# com 90 questões e ranking no Firebase Realtime Database. Ao concluir, o participante vê sua posição mesmo fora do Top 10; empates compartilham a mesma colocação.

O JavaScript está dividido em `js/questions.js` (questões), `js/quiz.js` (seleção e embaralhamento), `js/ranking.js` (Firebase e classificação) e `js/app.js` (interface). Para executar os testes, use `node --test --test-isolation=none`.

## Publicar no GitHub Pages

O arquivo `index.html` na raiz é a página do site. Depois de enviar este projeto ao GitHub, abra **Settings → Pages → Build and deployment**, selecione **Deploy from a branch** e escolha a branch publicada com a pasta **/(root)**. Os módulos JavaScript precisam ser servidos por HTTP; abrir o HTML diretamente por `file://` não executa o quiz.

O ranking usa o banco `temp-e-humid-default-rtdb`. Para liberar somente o caminho do ranking, adicione o conteúdo de [firebase-rules-codequest-snippet.json](firebase-rules-codequest-snippet.json) dentro das regras já existentes do Realtime Database, sem substituir as regras dos outros dados. Veja [FIREBASE_RANKING.md](FIREBASE_RANKING.md).
