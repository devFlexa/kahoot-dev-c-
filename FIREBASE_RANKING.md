# Ranking no Firebase Realtime Database

O quiz lê e grava em `/codequest_rankings/{nivel}_{quantidade}`. Cada partida cria uma entrada com nome, pontos, acertos, total de questões e data. Os 10 maiores pontos de cada configuração são exibidos no ranking. Ao final, a posição do participante é calculada contando as partidas com pontuação maior; empates dividem a mesma posição.

Para habilitar o acesso público, abra **Firebase Console → Realtime Database → Regras** e adicione o conteúdo de [firebase-rules-codequest-snippet.json](firebase-rules-codequest-snippet.json) **dentro do objeto `rules` existente**, preservando as regras dos outros caminhos do banco. Publique as regras no console.

Essas regras permitem ler o Top 10 e consultar os resultados com pontuação maior para calcular a posição, além de criar registros com formato e pontuação válidos. Se você já publicou a versão anterior das regras, atualize a condição `.read` para que a posição apareça. Como o quiz roda no navegador sem autenticação, um usuário com conhecimentos técnicos ainda pode enviar uma pontuação falsa diretamente ao banco. Para uma competição com premiação, valide as respostas em um servidor.
