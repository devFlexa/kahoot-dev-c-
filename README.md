# CodeQuest C#

Quiz de C# com 90 questões e ranking no Firebase Realtime Database.

## Publicar no GitHub Pages

O arquivo `index.html` na raiz é a página do site. Depois de enviar este projeto ao GitHub, abra **Settings → Pages → Build and deployment**, selecione **Deploy from a branch** e escolha a branch publicada com a pasta **/(root)**.

O ranking usa o banco `temp-e-humid-default-rtdb`. Para liberar somente o caminho do ranking, adicione o conteúdo de [firebase-rules-codequest-snippet.json](firebase-rules-codequest-snippet.json) dentro das regras já existentes do Realtime Database, sem substituir as regras dos outros dados. Veja [FIREBASE_RANKING.md](FIREBASE_RANKING.md).
