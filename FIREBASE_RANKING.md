# Ranking no Firebase Realtime Database

O quiz lê e grava em `/codequest_rankings/{nivel}_{quantidade}`. Cada partida cria uma entrada com nome, pontos, acertos, total de questões e data. Os 10 maiores pontos de cada configuração são exibidos no ranking.

Para habilitar o acesso público, abra **Firebase Console → Realtime Database → Regras** e adicione o conteúdo de [firebase-rules-codequest-snippet.json](firebase-rules-codequest-snippet.json) **dentro do objeto `rules` existente**, preservando as regras dos outros caminhos do banco. Publique as regras no console.

Essas regras permitem ler somente consultas de até 10 resultados ordenados por pontos e criar registros com formato e pontuação válidos. Como o quiz roda no navegador sem autenticação, um usuário com conhecimentos técnicos ainda pode enviar uma pontuação falsa diretamente ao banco. Para uma competição com premiação, valide as respostas em um servidor.
