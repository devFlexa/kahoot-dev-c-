export const BANK = [
  {
    "id": 1,
    "question": "Qual é a extensão padrão de um arquivo de código C#?",
    "choices": [
      ".java",
      ".cpp",
      ".cs",
      ".py"
    ],
    "correct": 2,
    "level": "Iniciante",
    "explanation": "Arquivos de código-fonte C# normalmente utilizam a extensão .cs.",
    "code": ""
  },
  {
    "id": 2,
    "question": "Qual comando escreve uma mensagem no console?",
    "choices": [
      "Console.ReadLine()",
      "Console.WriteLine()",
      "Console.Clear()",
      "Console.ReadKey()"
    ],
    "correct": 1,
    "level": "Iniciante",
    "explanation": "Console.WriteLine() escreve uma informação e avança para a próxima linha no console.",
    "code": ""
  },
  {
    "id": 3,
    "question": "Qual tipo armazena um número inteiro?",
    "choices": [
      "int",
      "string",
      "bool",
      "char"
    ],
    "correct": 0,
    "level": "Iniciante",
    "explanation": "int representa números inteiros, como -3, 0 e 25.",
    "code": ""
  },
  {
    "id": 4,
    "question": "Qual tipo armazena textos em C#?",
    "choices": [
      "float",
      "int",
      "char",
      "string"
    ],
    "correct": 3,
    "level": "Iniciante",
    "explanation": "string armazena sequências de caracteres, como nomes e mensagens.",
    "code": ""
  },
  {
    "id": 5,
    "question": "Qual tipo pode armazenar 3.14?",
    "choices": [
      "bool",
      "int",
      "double",
      "char"
    ],
    "correct": 2,
    "level": "Iniciante",
    "explanation": "double representa números de ponto flutuante com casas decimais.",
    "code": ""
  },
  {
    "id": 6,
    "question": "Qual tipo armazena true ou false?",
    "choices": [
      "string",
      "bool",
      "int",
      "decimal"
    ],
    "correct": 1,
    "level": "Iniciante",
    "explanation": "bool só pode guardar true ou false.",
    "code": ""
  },
  {
    "id": 7,
    "question": "Qual operador atribui um valor a uma variável?",
    "choices": [
      "=",
      "==",
      "!=",
      "&&"
    ],
    "correct": 0,
    "level": "Iniciante",
    "explanation": "O símbolo = atribui um valor; == compara dois valores.",
    "code": ""
  },
  {
    "id": 8,
    "question": "Qual operador compara se dois valores são iguais?",
    "choices": [
      "=",
      ">=",
      "!=",
      "=="
    ],
    "correct": 3,
    "level": "Iniciante",
    "explanation": "== testa igualdade. Já = realiza atribuição, e != testa diferença.",
    "code": ""
  },
  {
    "id": 9,
    "question": "Em C#: int x = 7; x += 3; Qual é o valor de x?",
    "choices": [
      "7",
      "10",
      "3",
      "21"
    ],
    "correct": 1,
    "level": "Iniciante",
    "explanation": "x += 3 é o mesmo que x = x + 3. Portanto, 7 + 3 = 10.",
    "code": "int x = 7;\nx += 3;\nConsole.WriteLine(x);"
  },
  {
    "id": 10,
    "question": "Em C#: int n = 9 / 2; Qual é o valor de n?",
    "choices": [
      "4",
      "4.5",
      "5",
      "2"
    ],
    "correct": 0,
    "level": "Iniciante",
    "explanation": "Quando ambos os operandos são int, a divisão inteira descarta a parte decimal: 9 / 2 resulta em 4.",
    "code": "int n = 9 / 2;\nConsole.WriteLine(n);"
  },
  {
    "id": 11,
    "question": "Qual é o resultado de 2 + 3 * 4?",
    "choices": [
      "20",
      "24",
      "14",
      "9"
    ],
    "correct": 2,
    "level": "Iniciante",
    "explanation": "A multiplicação tem precedência: 3 × 4 = 12; depois 2 + 12 = 14.",
    "code": "Console.WriteLine(2 + 3 * 4);"
  },
  {
    "id": 12,
    "question": "Qual comando verifica uma condição?",
    "choices": [
      "for",
      "if",
      "new",
      "class"
    ],
    "correct": 1,
    "level": "Iniciante",
    "explanation": "if executa um bloco quando a expressão lógica avaliada é verdadeira.",
    "code": ""
  },
  {
    "id": 13,
    "question": "Qual caractere encerra a maioria das instruções em C#?",
    "choices": [
      ":",
      ";",
      ".",
      "#"
    ],
    "correct": 1,
    "level": "Iniciante",
    "explanation": "O ponto e vírgula (;) encerra a maioria das instruções em C#.",
    "code": "int idade = 16;\nConsole.WriteLine(idade);"
  },
  {
    "id": 14,
    "question": "Qual é a saída deste código?",
    "choices": [
      "2",
      "4",
      "6",
      "Erro de compilação"
    ],
    "correct": 2,
    "level": "Iniciante",
    "explanation": "A variável a vale 2 e b vale 4. A soma é 6.",
    "code": "int a = 2;\nint b = 4;\nConsole.WriteLine(a + b);"
  },
  {
    "id": 15,
    "question": "Qual tipo guarda apenas um caractere Unicode UTF-16?",
    "choices": [
      "string",
      "char",
      "bool",
      "int"
    ],
    "correct": 1,
    "level": "Iniciante",
    "explanation": "char representa uma unidade de código UTF-16, geralmente um caractere. Usa aspas simples.",
    "code": "char letra = 'A';"
  },
  {
    "id": 16,
    "question": "Qual declaração de texto está correta?",
    "choices": [
      "string cidade = \"Caxias\";",
      "string cidade = 'Caxias';",
      "texto cidade = \"Caxias\";",
      "String cidade = 123;"
    ],
    "correct": 0,
    "level": "Iniciante",
    "explanation": "Em C#, textos do tipo string podem ser declarados com aspas duplas.",
    "code": "string cidade = \"Caxias\";"
  },
  {
    "id": 17,
    "question": "Qual operador calcula o resto de uma divisão?",
    "choices": [
      "/",
      "*",
      "%",
      "//"
    ],
    "correct": 2,
    "level": "Iniciante",
    "explanation": "O operador % calcula o resto da divisão inteira (ou também pode operar com outros tipos numéricos).",
    "code": "Console.WriteLine(10 % 3); // 1"
  },
  {
    "id": 18,
    "question": "Qual é a saída do código?",
    "choices": [
      "5",
      "6",
      "4",
      "Erro"
    ],
    "correct": 1,
    "level": "Iniciante",
    "explanation": "O operador ++ acrescenta uma unidade ao valor da variável.",
    "code": "int numero = 5;\nnumero++;\nConsole.WriteLine(numero);"
  },
  {
    "id": 19,
    "question": "Qual operador representa “diferente de”?",
    "choices": [
      "=",
      "==",
      "!=",
      "<>"
    ],
    "correct": 2,
    "level": "Iniciante",
    "explanation": "O operador != compara se dois valores são diferentes.",
    "code": "Console.WriteLine(3 != 4); // True"
  },
  {
    "id": 20,
    "question": "Quanto vale resultado?",
    "choices": [
      "true",
      "false",
      "10",
      "Erro de compilação"
    ],
    "correct": 1,
    "level": "Iniciante",
    "explanation": "Como 10 não é menor que 5, o resultado da comparação é false.",
    "code": "bool resultado = 10 < 5;"
  },
  {
    "id": 21,
    "question": "Como se escreve um comentário de uma linha em C#?",
    "choices": [
      "<!-- comentário -->",
      "## comentário",
      "// comentário",
      "** comentário"
    ],
    "correct": 2,
    "level": "Iniciante",
    "explanation": "Duas barras (//) iniciam comentário de uma linha.",
    "code": "// Este código soma dois números"
  },
  {
    "id": 22,
    "question": "O que Console.ReadLine() normalmente devolve?",
    "choices": [
      "Um inteiro ou null",
      "Uma string ou valor null",
      "Um booleano ou null",
      "Um decimal ou null"
    ],
    "correct": 1,
    "level": "Iniciante",
    "explanation": "Console.ReadLine() devolve uma string com a entrada lida ou null se chegar ao fim da entrada.",
    "code": "string? nome = Console.ReadLine();"
  },
  {
    "id": 23,
    "question": "Qual conversão de texto para inteiro está correta se o texto for válido?",
    "choices": [
      "int.Parse(\"25\")",
      "string.Parse(25)",
      "int.Criar(\"25\")",
      "int.Convert(25)"
    ],
    "correct": 0,
    "level": "Iniciante",
    "explanation": "int.Parse converte uma string numérica válida em um inteiro. Para entradas inválidas, prefira int.TryParse.",
    "code": "int idade = int.Parse(\"25\");"
  },
  {
    "id": 24,
    "question": "Qual é o valor final de x?",
    "choices": [
      "3",
      "9",
      "12",
      "Erro"
    ],
    "correct": 2,
    "level": "Iniciante",
    "explanation": "x recebe 3 e depois x = x * 4, portanto resulta em 12.",
    "code": "int x = 3;\nx *= 4;"
  },
  {
    "id": 25,
    "question": "Qual expressão soma o valor 1 à variável pontos?",
    "choices": [
      "pontos = 1;",
      "pontos += 1;",
      "pontos == 1;",
      "pontos => 1;"
    ],
    "correct": 1,
    "level": "Iniciante",
    "explanation": "pontos += 1 equivale a pontos = pontos + 1.",
    "code": "int pontos = 9;\npontos += 1;"
  },
  {
    "id": 26,
    "question": "Qual das alternativas cria uma constante inteira?",
    "choices": [
      "static int n = 5;",
      "readonly n = 5;",
      "const int n = 5;",
      "int const = 5;"
    ],
    "correct": 2,
    "level": "Iniciante",
    "explanation": "const declara uma constante cujo valor não muda após a compilação.",
    "code": "const int DIAS_SEMANA = 7;"
  },
  {
    "id": 27,
    "question": "O que faz o comando else em uma estrutura if/else?",
    "choices": [
      "Repete o teste do if",
      "Executa o bloco alternativo quando o if é falso",
      "Declara outra condição",
      "Termina a execução do programa se o if falha"
    ],
    "correct": 1,
    "level": "Iniciante",
    "explanation": "else executa o bloco alternativo quando a condição do if não é satisfeita.",
    "code": "int idade = 15;\nif (idade >= 18)\n    Console.WriteLine(\"Maior\");\nelse\n    Console.WriteLine(\"Menor\");"
  },
  {
    "id": 28,
    "question": "Qual saída será exibida?",
    "choices": [
      "Aprovado",
      "Recuperação",
      "Reprovado",
      "Nenhuma"
    ],
    "correct": 0,
    "level": "Iniciante",
    "explanation": "A nota 8 satisfaz a condição nota >= 7, então imprime Aprovado.",
    "code": "int nota = 8;\nif (nota >= 7)\n    Console.WriteLine(\"Aprovado\");\nelse\n    Console.WriteLine(\"Reprovado\");"
  },
  {
    "id": 29,
    "question": "O que significa && em uma condição?",
    "choices": [
      "OU",
      "NÃO",
      "E",
      "IGUAL"
    ],
    "correct": 2,
    "level": "Iniciante",
    "explanation": "&& significa E lógico: as duas expressões precisam ser verdadeiras.",
    "code": "bool podeEntrar = idade >= 18 && temIngresso;"
  },
  {
    "id": 30,
    "question": "Qual símbolo é usado para agrupar o corpo de um bloco?",
    "choices": [
      "( )",
      "[ ]",
      "{ }",
      "< >"
    ],
    "correct": 2,
    "level": "Iniciante",
    "explanation": "As chaves { } agrupam instruções em blocos, como métodos, classes e laços.",
    "code": "if (true)\n{\n    Console.WriteLine(\"OK\");\n}"
  },
  {
    "id": 31,
    "question": "Qual operador significa E lógico (AND)?",
    "choices": [
      "||",
      "!",
      "!=",
      "&&"
    ],
    "correct": 3,
    "level": "Intermediário",
    "explanation": "&& é o E lógico: as duas condições devem ser verdadeiras.",
    "code": ""
  },
  {
    "id": 32,
    "question": "Qual operador significa OU lógico (OR)?",
    "choices": [
      "||",
      "&&",
      "==",
      "!"
    ],
    "correct": 0,
    "level": "Intermediário",
    "explanation": "|| é o OU lógico: basta uma das condições ser verdadeira.",
    "code": ""
  },
  {
    "id": 33,
    "question": "Em C#: 5 % 2 == 0 é verdadeiro ou falso?",
    "choices": [
      "Verdadeiro",
      "Erro de compilação",
      "Falso",
      "Depende do valor"
    ],
    "correct": 2,
    "level": "Intermediário",
    "explanation": "O resto de 5 dividido por 2 é 1. Assim, 1 == 0 é falso.",
    "code": "bool teste = 5 % 2 == 0;\nConsole.WriteLine(teste);"
  },
  {
    "id": 34,
    "question": "Quantas vezes executa: for(int i=0; i<3; i++)?",
    "choices": [
      "2",
      "4",
      "1",
      "3"
    ],
    "correct": 3,
    "level": "Intermediário",
    "explanation": "O contador assume i = 0, 1 e 2; ao chegar a 3, a condição i < 3 deixa de valer.",
    "code": "for (int i = 0; i < 3; i++)\n{\n    Console.WriteLine(i);\n}"
  },
  {
    "id": 35,
    "question": "Qual laço repete enquanto a condição for verdadeira?",
    "choices": [
      "switch",
      "while",
      "if",
      "return"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "while executa repetidamente enquanto sua condição for verdadeira.",
    "code": ""
  },
  {
    "id": 36,
    "question": "Para que serve break dentro de um laço?",
    "choices": [
      "Encerrar o laço",
      "Reiniciar o programa",
      "Pular a próxima volta",
      "Criar variável"
    ],
    "correct": 0,
    "level": "Intermediário",
    "explanation": "break interrompe imediatamente o laço em execução.",
    "code": ""
  },
  {
    "id": 37,
    "question": "Para que serve continue dentro de um laço?",
    "choices": [
      "Encerra a iteração e o laço",
      "Interrompe todo o programa",
      "Ignora o restante e avança à próxima iteração",
      "Começa um novo laço dentro do atual"
    ],
    "correct": 2,
    "level": "Intermediário",
    "explanation": "continue ignora o restante da iteração atual e avança à próxima.",
    "code": ""
  },
  {
    "id": 38,
    "question": "Em C#: int[] v = {2, 4, 6}; Quanto vale v[1]?",
    "choices": [
      "2",
      "4",
      "6",
      "1"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "Os índices dos arrays começam em zero: v[0] = 2, v[1] = 4 e v[2] = 6.",
    "code": "int[] v = { 2, 4, 6 };\nConsole.WriteLine(v[1]);"
  },
  {
    "id": 39,
    "question": "Qual comando percorre os itens de uma coleção?",
    "choices": [
      "catch",
      "namespace",
      "return",
      "foreach"
    ],
    "correct": 3,
    "level": "Intermediário",
    "explanation": "foreach permite visitar cada elemento de uma coleção sem controlar o índice manualmente.",
    "code": ""
  },
  {
    "id": 40,
    "question": "Se Dobro(n) retorna n * 2, quanto retorna Dobro(4)?",
    "choices": [
      "6",
      "8",
      "4",
      "16"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "Se Dobro(n) calcula n × 2, então Dobro(4) é 8.",
    "code": "int Dobro(int n)\n{\n    return n * 2;\n}\nConsole.WriteLine(Dobro(4));"
  },
  {
    "id": 41,
    "question": "O que significa void em um método?",
    "choices": [
      "Não aceita parâmetros",
      "Sempre retorna zero",
      "Não retorna valor",
      "Método privado"
    ],
    "correct": 2,
    "level": "Intermediário",
    "explanation": "Um método void não devolve valor para o código que o chamou.",
    "code": ""
  },
  {
    "id": 42,
    "question": "Qual método tenta converter texto para int sem lançar FormatException?",
    "choices": [
      "int.TryParse",
      "Convert.ToInt32",
      "int.Parse",
      "double.TryParse"
    ],
    "correct": 0,
    "level": "Intermediário",
    "explanation": "int.TryParse tenta converter um texto e devolve true/false, em vez de lançar FormatException por entrada inválida.",
    "code": ""
  },
  {
    "id": 43,
    "question": "Qual saída produz este laço?",
    "choices": [
      "1 2 3",
      "0 1 2",
      "0 1 2 3",
      "1 2"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "O for imprime i = 0, 1 e 2; a execução para quando i chega a 3.",
    "code": "for (int i = 0; i < 3; i++)\n    Console.Write(i + \" \");"
  },
  {
    "id": 44,
    "question": "Qual é o valor da variável soma?",
    "choices": [
      "12",
      "10",
      "14",
      "16"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "O laço soma 1+2+3+4, totalizando 10.",
    "code": "int soma = 0;\nfor (int i = 1; i <= 4; i++)\n    soma += i;"
  },
  {
    "id": 45,
    "question": "Quantas vezes um do/while executa o corpo, no mínimo?",
    "choices": [
      "Nenhuma",
      "Uma",
      "Duas",
      "Infinitas"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "O teste de um do/while ocorre depois da primeira execução do corpo.",
    "code": ""
  },
  {
    "id": 46,
    "question": "O que acontece ao acessar v[3] neste array?",
    "choices": [
      "Imprime o último valor do array (30)",
      "Imprime o valor padrão (0)",
      "Lança IndexOutOfRangeException ao acessar o índice",
      "Lança uma NullReferenceException"
    ],
    "correct": 2,
    "level": "Intermediário",
    "explanation": "Um array com três itens tem índices 0, 1 e 2; o índice 3 está fora dos limites.",
    "code": "int[] v = { 10, 20, 30 };\nConsole.WriteLine(v[3]);"
  },
  {
    "id": 47,
    "question": "Qual propriedade indica quantos elementos existem em um array?",
    "choices": [
      "Size",
      "Count()",
      "Length",
      "Capacity"
    ],
    "correct": 2,
    "level": "Intermediário",
    "explanation": "Arrays disponibilizam Length para informar a quantidade de elementos.",
    "code": "int[] notas = { 5, 7, 9 };\nConsole.WriteLine(notas.Length);"
  },
  {
    "id": 48,
    "question": "Qual é a saída do código?",
    "choices": [
      "C#",
      "Java",
      "Python",
      "Erro"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "O índice zero é o primeiro elemento da lista. Após Add, a posição [1] contém Java.",
    "code": "var linguagens = new List<string>();\nlinguagens.Add(\"C#\");\nlinguagens.Add(\"Java\");\nConsole.WriteLine(linguagens[1]);"
  },
  {
    "id": 49,
    "question": "O que List<int>.Add(7) faz?",
    "choices": [
      "Remove 7",
      "Insere 7 ao fim da lista",
      "Ordena a lista",
      "Substitui todos os itens por 7"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "Add adiciona um novo elemento ao final de uma List<int>.",
    "code": "var numeros = new List<int>();\nnumeros.Add(7);"
  },
  {
    "id": 50,
    "question": "Qual é a saída?",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "level": "Intermediário",
    "explanation": "A string \"C#?\" contém três caracteres, logo Length vale 3.",
    "code": "string texto = \"C#?\";\nConsole.WriteLine(texto.Length);"
  },
  {
    "id": 51,
    "question": "Qual método transforma uma string em letras maiúsculas?",
    "choices": [
      "ToUpper()",
      "ToLower()",
      "UpperCase()",
      "MakeBig()"
    ],
    "correct": 0,
    "level": "Intermediário",
    "explanation": "ToUpper retorna uma nova string convertida para maiúsculas.",
    "code": "Console.WriteLine(\"csharp\".ToUpper());"
  },
  {
    "id": 52,
    "question": "Qual resultado da expressão?",
    "choices": [
      "false",
      "true",
      "1",
      "Erro"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "O operador ! inverte o valor lógico. !false resulta em true.",
    "code": "bool ativo = false;\nConsole.WriteLine(!ativo);"
  },
  {
    "id": 53,
    "question": "Qual é a saída de Dobro(6)?",
    "choices": [
      "6",
      "8",
      "12",
      "36"
    ],
    "correct": 2,
    "level": "Intermediário",
    "explanation": "O método multiplica o parâmetro por 2, então 6 * 2 é 12.",
    "code": "int Dobro(int valor)\n{\n    return valor * 2;\n}\nConsole.WriteLine(Dobro(6));"
  },
  {
    "id": 54,
    "question": "Qual assinatura representa método que devolve um int?",
    "choices": [
      "void Somar(int a, int b)",
      "int Somar(int a, int b)",
      "string Somar(int a, int b)",
      "bool Somar(int a, int b)"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "O tipo antes do nome do método especifica o tipo de retorno. int devolve inteiro.",
    "code": "int Somar(int a, int b)\n{\n    return a + b;\n}"
  },
  {
    "id": 55,
    "question": "Qual é a saída?",
    "choices": [
      "A",
      "B",
      "C",
      "Erro"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "Quando numero é 2, o case 2 corresponde, imprime B e executa break.",
    "code": "int numero = 2;\nswitch (numero)\n{\n    case 1: Console.WriteLine(\"A\"); break;\n    case 2: Console.WriteLine(\"B\"); break;\n    default: Console.WriteLine(\"C\"); break;\n}"
  },
  {
    "id": 56,
    "question": "Para que serve o operador ?? em C#?",
    "choices": [
      "Soma dois valores numéricos",
      "Substitui null pelo valor alternativo fornecido",
      "Cria uma instância de classe",
      "Compara duas strings por conteúdo igual"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "O operador de coalescência nula (??) usa o valor da direita quando o da esquerda é null.",
    "code": "string? nome = null;\nConsole.WriteLine(nome ?? \"Visitante\");"
  },
  {
    "id": 57,
    "question": "Qual é a saída?",
    "choices": [
      "5",
      "10",
      "20",
      "Erro"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "A expressão condicional escolhe 10, pois nota >= 7 é verdadeiro.",
    "code": "int nota = 8;\nint pontos = nota >= 7 ? 10 : 5;\nConsole.WriteLine(pontos);"
  },
  {
    "id": 58,
    "question": "Qual comando converte uma lista em uma sequência ordenada crescente com LINQ?",
    "choices": [
      "OrderBy(x => x)",
      "OrderByDescending(x => x)",
      "Reverse().ToList()",
      "Skip(1).ToList()"
    ],
    "correct": 0,
    "level": "Intermediário",
    "explanation": "OrderBy(x => x) ordena os elementos em ordem crescente e devolve uma sequência; não altera a lista original.",
    "code": "var ordenados = numeros.OrderBy(x => x);"
  },
  {
    "id": 59,
    "question": "O que finalmente acontece com o bloco finally?",
    "choices": [
      "Executa apenas se não houver exceção",
      "Executa após try, independentemente de exceções",
      "Executa apenas se houver catch",
      "Executa antes do bloco try"
    ],
    "correct": 1,
    "level": "Intermediário",
    "explanation": "finally é usado para executar ações de limpeza ao sair do try/catch, com ou sem exceção na maioria dos fluxos normais de execução.",
    "code": "try { Console.WriteLine(\"A\"); }\nfinally { Console.WriteLine(\"Finalizado\"); }"
  },
  {
    "id": 60,
    "question": "Qual é a saída de soma?",
    "choices": [
      "8",
      "10",
      "12",
      "14"
    ],
    "correct": 2,
    "level": "Intermediário",
    "explanation": "Somam-se apenas os números pares: 2 + 4 + 6 = 12.",
    "code": "int[] v = { 1, 2, 3, 4, 5, 6 };\nint soma = 0;\nforeach (int n in v)\n{\n    if (n % 2 == 0) soma += n;\n}"
  },
  {
    "id": 61,
    "question": "Em POO, o que é uma classe?",
    "choices": [
      "Um número inteiro",
      "Uma tabela SQL",
      "Um comando de repetição",
      "Um modelo para objetos"
    ],
    "correct": 3,
    "level": "Orientação a Objetos",
    "explanation": "Uma classe descreve atributos e comportamentos que objetos daquele tipo podem ter.",
    "code": ""
  },
  {
    "id": 62,
    "question": "Qual palavra-chave cria uma instância de classe?",
    "choices": [
      "static",
      "return",
      "new",
      "private"
    ],
    "correct": 2,
    "level": "Orientação a Objetos",
    "explanation": "new cria uma nova instância, como em new Carro().",
    "code": ""
  },
  {
    "id": 63,
    "question": "Quem pode acessar um membro private de uma classe?",
    "choices": [
      "O código do próprio tipo que o declara",
      "Qualquer tipo do mesmo projeto",
      "Toda classe derivada do tipo",
      "Qualquer tipo do mesmo namespace"
    ],
    "correct": 0,
    "level": "Orientação a Objetos",
    "explanation": "Membros private só são acessíveis diretamente no próprio tipo que os declara, incluindo seus tipos aninhados.",
    "code": ""
  },
  {
    "id": 64,
    "question": "Em C#, get e set são usados normalmente em...",
    "choices": [
      "Laços",
      "Propriedades",
      "Namespaces",
      "Interfaces SQL"
    ],
    "correct": 1,
    "level": "Orientação a Objetos",
    "explanation": "get lê e set altera o valor de uma propriedade, conforme as regras definidas.",
    "code": ""
  },
  {
    "id": 65,
    "question": "Em 'class Aluno : Pessoa', o símbolo : indica...",
    "choices": [
      "Divisão",
      "Sobrecarga",
      "Método estático",
      "Herança"
    ],
    "correct": 3,
    "level": "Orientação a Objetos",
    "explanation": "Em C#, o uso de : após uma classe pode indicar herança de uma classe base, como Pessoa.",
    "code": "class Pessoa { }\nclass Aluno : Pessoa { }"
  },
  {
    "id": 66,
    "question": "Qual palavra-chave redefine método virtual herdado?",
    "choices": [
      "new",
      "virtual",
      "override",
      "protected"
    ],
    "correct": 2,
    "level": "Orientação a Objetos",
    "explanation": "override fornece uma nova implementação para um membro virtual ou abstrato herdado.",
    "code": ""
  },
  {
    "id": 67,
    "question": "Uma interface em C# define principalmente...",
    "choices": [
      "Um contrato com membros a implementar",
      "Um conjunto de dados em memória",
      "Uma tela gráfica de entrada",
      "Um tipo de laço de repetição"
    ],
    "correct": 0,
    "level": "Orientação a Objetos",
    "explanation": "Uma interface especifica membros de um contrato que tipos implementadores devem cumprir.",
    "code": ""
  },
  {
    "id": 68,
    "question": "Qual nome deve ter o construtor de uma classe Carro?",
    "choices": [
      "iniciar()",
      "Carro()",
      "new()",
      "constructor()"
    ],
    "correct": 1,
    "level": "Orientação a Objetos",
    "explanation": "O construtor possui o mesmo nome do tipo: a classe Carro tem um construtor Carro().",
    "code": "class Carro\n{\n    public Carro() { }\n}"
  },
  {
    "id": 69,
    "question": "Qual coleção permite adicionar itens dinamicamente?",
    "choices": [
      "int[]",
      "bool[]",
      "decimal[]",
      "List<int>"
    ],
    "correct": 3,
    "level": "Orientação a Objetos",
    "explanation": "List<int> permite adicionar e remover números inteiros dinamicamente.",
    "code": "var numeros = new List<int>();\nnumeros.Add(10);"
  },
  {
    "id": 70,
    "question": "O que a palavra-chave var faz?",
    "choices": [
      "Torna a variável visível globalmente",
      "Permite mudar o tipo em execução",
      "Infere o tipo na compilação",
      "Converte o valor para string"
    ],
    "correct": 2,
    "level": "Orientação a Objetos",
    "explanation": "var pede ao compilador que infira o tipo na declaração; não significa dynamic.",
    "code": "var idade = 15;\n// tipo inferido: int"
  },
  {
    "id": 71,
    "question": "Qual estrutura pode tratar exceções lançadas em C#?",
    "choices": [
      "try/catch",
      "for/while",
      "class/new",
      "get/set"
    ],
    "correct": 0,
    "level": "Orientação a Objetos",
    "explanation": "try/catch permite capturar e tratar exceções durante a execução.",
    "code": "try\n{\n    int n = int.Parse(\"texto\");\n}\ncatch (FormatException)\n{\n    Console.WriteLine(\"Valor inválido\");\n}"
  },
  {
    "id": 72,
    "question": "Um método static pertence principalmente...",
    "choices": [
      "A cada objeto criado",
      "À classe/tipo",
      "Somente ao construtor",
      "A uma interface SQL"
    ],
    "correct": 1,
    "level": "Orientação a Objetos",
    "explanation": "Um membro static pertence ao tipo e pode ser acessado sem criar uma instância, conforme sua visibilidade.",
    "code": ""
  },
  {
    "id": 73,
    "question": "O que significa encapsulamento em POO?",
    "choices": [
      "Proteger o estado interno e controlar o acesso",
      "Tornar todos os métodos estáticos",
      "Duplicar métodos em várias classes",
      "Expor diretamente todos os campos internos da classe"
    ],
    "correct": 0,
    "level": "Orientação a Objetos",
    "explanation": "Encapsulamento protege o estado interno e expõe operações controladas para interagir com o objeto.",
    "code": ""
  },
  {
    "id": 74,
    "question": "O que descreve melhor um objeto?",
    "choices": [
      "Uma instância de uma classe",
      "Uma extensão para código-fonte",
      "Uma instrução de banco de dados",
      "Um agrupamento de tipos e nomes"
    ],
    "correct": 0,
    "level": "Orientação a Objetos",
    "explanation": "Um objeto é uma instância concreta de uma classe com estado e comportamento.",
    "code": ""
  },
  {
    "id": 75,
    "question": "Qual modificador permite acesso à própria classe e às classes derivadas?",
    "choices": [
      "private",
      "protected",
      "internal somente",
      "sealed"
    ],
    "correct": 1,
    "level": "Orientação a Objetos",
    "explanation": "protected permite acesso na classe que declara o membro e nos tipos derivados, respeitadas as regras de acesso.",
    "code": ""
  },
  {
    "id": 76,
    "question": "Como criar um objeto da classe Pessoa?",
    "choices": [
      "Pessoa p = Pessoa();",
      "Pessoa p = new Pessoa;",
      "Pessoa p = new Pessoa();",
      "Pessoa p = Pessoa.new();"
    ],
    "correct": 2,
    "level": "Orientação a Objetos",
    "explanation": "A expressão new Pessoa() chama o construtor e cria uma instância de Pessoa.",
    "code": "Pessoa p = new Pessoa();"
  },
  {
    "id": 77,
    "question": "Qual é a função principal de um construtor?",
    "choices": [
      "Destruir a instância quando ela termina",
      "Inicializar a instância ao criá-la",
      "Impedir a herança da classe",
      "Criar uma tabela para cada objeto"
    ],
    "correct": 1,
    "level": "Orientação a Objetos",
    "explanation": "O construtor executa a inicialização de uma instância durante sua criação.",
    "code": "class Aluno\n{\n    public string Nome;\n    public Aluno(string nome) { Nome = nome; }\n}"
  },
  {
    "id": 78,
    "question": "Para que serve this em um método de instância?",
    "choices": [
      "Referir-se à instância atual",
      "Criar uma nova classe-base",
      "Encerrar a execução do método",
      "Tornar estático o método atual"
    ],
    "correct": 0,
    "level": "Orientação a Objetos",
    "explanation": "this representa a instância atual e ajuda a distinguir campos de parâmetros com mesmo nome.",
    "code": "class Pessoa\n{\n    private string nome;\n    public Pessoa(string nome) { this.nome = nome; }\n}"
  },
  {
    "id": 79,
    "question": "O que é sobrecarga (overload) de métodos?",
    "choices": [
      "Métodos com o mesmo nome e parâmetros diferentes",
      "Métodos com mesmo nome em classes sem relação entre si",
      "Mesmo nome, retorno diferente",
      "Mesmo nome, corpo idêntico"
    ],
    "correct": 0,
    "level": "Orientação a Objetos",
    "explanation": "Na sobrecarga, métodos possuem o mesmo nome, porém diferentes assinaturas de parâmetros.",
    "code": "int Somar(int a, int b) => a + b;\ndouble Somar(double a, double b) => a + b;"
  },
  {
    "id": 80,
    "question": "O que é polimorfismo em POO?",
    "choices": [
      "Objetos sempre executarem o mesmo método",
      "Uma operação ter comportamentos conforme o tipo concreto",
      "Uma classe herdar várias classes-base em um programa",
      "Valores numéricos virarem texto automaticamente"
    ],
    "correct": 1,
    "level": "Orientação a Objetos",
    "explanation": "Polimorfismo permite trabalhar com abstrações e obter comportamentos diferentes conforme o objeto concreto.",
    "code": ""
  },
  {
    "id": 81,
    "question": "O que uma classe abstract impede diretamente?",
    "choices": [
      "Declarar métodos com implementação",
      "Criar instância direta com new",
      "Definir construtores na classe",
      "Implementar uma ou mais interfaces"
    ],
    "correct": 1,
    "level": "Orientação a Objetos",
    "explanation": "Uma classe abstrata não pode ser instanciada diretamente, mas pode ser herdada por classes concretas.",
    "code": "abstract class Animal { }\n// new Animal(); // não compila"
  },
  {
    "id": 82,
    "question": "Qual palavra-chave impede que uma classe tenha subclasses?",
    "choices": [
      "virtual",
      "sealed",
      "override",
      "params"
    ],
    "correct": 1,
    "level": "Orientação a Objetos",
    "explanation": "sealed impede a herança de uma classe.",
    "code": "sealed class Configuracao { }"
  },
  {
    "id": 83,
    "question": "Para implementar uma interface IImprimivel, qual declaração é válida?",
    "choices": [
      "class Relatorio implements IImprimivel",
      "class Relatorio :: IImprimivel",
      "class Relatorio : IImprimivel",
      "class Relatorio < IImprimivel"
    ],
    "correct": 2,
    "level": "Orientação a Objetos",
    "explanation": "Em C#, uma classe implementa interface usando : seguido pelo nome da interface.",
    "code": "interface IImprimivel { void Imprimir(); }\nclass Relatorio : IImprimivel\n{\n    public void Imprimir() { }\n}"
  },
  {
    "id": 84,
    "question": "Qual conceito expressa que um Carro contém um Motor?",
    "choices": [
      "Composição",
      "Herança obrigatória",
      "Polimorfismo de parâmetros",
      "Recursão"
    ],
    "correct": 0,
    "level": "Orientação a Objetos",
    "explanation": "A relação \"tem um\" normalmente é modelada por composição ou associação, em vez de herança.",
    "code": "class Motor { }\nclass Carro\n{\n    private readonly Motor motor = new Motor();\n}"
  },
  {
    "id": 85,
    "question": "O que representa uma propriedade automática em C#?",
    "choices": [
      "Um método sem nome declarado na classe",
      "Uma propriedade com campo de apoio gerado pelo compilador",
      "Um campo de instância definido por outro tipo",
      "Uma propriedade ligada a uma tabela SQL"
    ],
    "correct": 1,
    "level": "Orientação a Objetos",
    "explanation": "Com get; set; o compilador fornece automaticamente um campo de apoio.",
    "code": "public string Nome { get; set; } = \"\";"
  },
  {
    "id": 86,
    "question": "Qual declaração permite alterar Nome somente dentro da própria classe?",
    "choices": [
      "public string Nome { get; private set; }",
      "public string Nome { private get; set; }",
      "private string Nome { get; set; }",
      "public string Nome { get; set; }"
    ],
    "correct": 0,
    "level": "Orientação a Objetos",
    "explanation": "Um setter private impede que outras classes alterem a propriedade diretamente.",
    "code": "public string Nome { get; private set; } = \"\";"
  },
  {
    "id": 87,
    "question": "O que acontece com um campo readonly de instância?",
    "choices": [
      "Pode receber outro valor em todo método da própria classe",
      "Pode receber valor na declaração ou no construtor da classe",
      "É sempre uma constante de compilação",
      "Impede alterar o objeto que ele referencia"
    ],
    "correct": 1,
    "level": "Orientação a Objetos",
    "explanation": "Um campo readonly pode receber valor em sua declaração ou no construtor do tipo em que foi definido.",
    "code": "class Pedido\n{\n    private readonly int codigo;\n    public Pedido(int codigo) { this.codigo = codigo; }\n}"
  },
  {
    "id": 88,
    "question": "Qual é uma vantagem de receber dependências no construtor?",
    "choices": [
      "Dispensa qualquer teste de unidade",
      "Permite trocar dependências usadas pela classe",
      "Elimina a necessidade de interfaces no projeto",
      "Torna estáticos os métodos da classe"
    ],
    "correct": 1,
    "level": "Orientação a Objetos",
    "explanation": "A injeção de dependências por construtor ajuda a desacoplar responsabilidades e facilita testes.",
    "code": "class PedidoService\n{\n    private readonly IRepositorio repositorio;\n    public PedidoService(IRepositorio repositorio)\n    {\n        this.repositorio = repositorio;\n    }\n}"
  },
  {
    "id": 89,
    "question": "O que significa o princípio da responsabilidade única (SRP)?",
    "choices": [
      "Uma classe deve ter um único motivo para mudar",
      "Um projeto só pode ter uma única classe ativa",
      "Cada classe deve declarar apenas um método",
      "Um método deve receber somente um parâmetro"
    ],
    "correct": 0,
    "level": "Orientação a Objetos",
    "explanation": "O SRP recomenda que cada módulo ou classe concentre uma responsabilidade coesa, ou seja, um motivo para mudar.",
    "code": ""
  },
  {
    "id": 90,
    "question": "Qual relação é mais adequada para “Cachorro é um Animal”?",
    "choices": [
      "Composição, pois Cachorro contém Animal",
      "Herança, se Cachorro for um Animal",
      "Dependência, pois Animal usa Cachorro",
      "Associação, sem relação entre os tipos"
    ],
    "correct": 1,
    "level": "Orientação a Objetos",
    "explanation": "A relação \"é um\" pode representar herança quando os comportamentos e contratos do tipo base fazem sentido.",
    "code": "class Animal { }\nclass Cachorro : Animal { }"
  }
];
