"""Equilibra alternativas do CodeQuest sem alterar os gabaritos."""

import json
import re
from pathlib import Path


BANK_FILE = Path(__file__).with_name("js").joinpath("questions.js")
CHOICES = {
    2: ["Console.ReadLine()", "Console.WriteLine()", "Console.Clear()", "Console.ReadKey()"],
    4: ["float", "int", "char", "string"],
    5: ["bool", "int", "double", "char"],
    20: ["true", "false", "10", "Erro de compilação"],
    22: ["Um inteiro ou null", "Uma string ou valor null", "Um booleano ou null", "Um decimal ou null"],
    27: ["Repete o teste do if", "Executa o bloco alternativo quando o if é falso", "Declara outra condição", "Termina a execução do programa se o if falha"],
    37: ["Encerra a iteração e o laço", "Interrompe todo o programa", "Ignora o restante e avança à próxima iteração", "Começa um novo laço dentro do atual"],
    41: ["Não aceita parâmetros", "Sempre retorna zero", "Não retorna valor", "Método privado"],
    42: ["int.TryParse", "Convert.ToInt32", "int.Parse", "double.TryParse"],
    44: ["12", "10", "14", "16"],
    46: ["Imprime o último valor do array (30)", "Imprime o valor padrão (0)", "Lança IndexOutOfRangeException ao acessar o índice", "Lança uma NullReferenceException"],
    54: ["void Somar(int a, int b)", "int Somar(int a, int b)", "string Somar(int a, int b)", "bool Somar(int a, int b)"],
    56: ["Soma dois valores numéricos", "Substitui null pelo valor alternativo fornecido", "Cria uma instância de classe", "Compara duas strings por conteúdo igual"],
    58: ["OrderBy(x => x)", "OrderByDescending(x => x)", "Reverse().ToList()", "Skip(1).ToList()"],
    59: ["Executa apenas se não houver exceção", "Executa após try, independentemente de exceções", "Executa apenas se houver catch", "Executa antes do bloco try"],
    63: ["O código do próprio tipo que o declara", "Qualquer tipo do mesmo projeto", "Toda classe derivada do tipo", "Qualquer tipo do mesmo namespace"],
    66: ["new", "virtual", "override", "protected"],
    67: ["Um contrato com membros a implementar", "Um conjunto de dados em memória", "Uma tela gráfica de entrada", "Um tipo de laço de repetição"],
    69: ["int[]", "bool[]", "decimal[]", "List<int>"],
    70: ["Torna a variável visível globalmente", "Permite mudar o tipo em execução", "Infere o tipo na compilação", "Converte o valor para string"],
    73: ["Proteger o estado interno e controlar o acesso", "Tornar todos os métodos estáticos", "Duplicar métodos em várias classes", "Expor diretamente todos os campos internos da classe"],
    74: ["Uma instância de uma classe", "Uma extensão para código-fonte", "Uma instrução de banco de dados", "Um agrupamento de tipos e nomes"],
    76: ["Pessoa p = Pessoa();", "Pessoa p = new Pessoa;", "Pessoa p = new Pessoa();", "Pessoa p = Pessoa.new();"],
    77: ["Destruir a instância quando ela termina", "Inicializar a instância ao criá-la", "Impedir a herança da classe", "Criar uma tabela para cada objeto"],
    78: ["Referir-se à instância atual", "Criar uma nova classe-base", "Encerrar a execução do método", "Tornar estático o método atual"],
    79: ["Métodos com o mesmo nome e parâmetros diferentes", "Métodos com mesmo nome em classes sem relação entre si", "Mesmo nome, retorno diferente", "Mesmo nome, corpo idêntico"],
    80: ["Objetos sempre executarem o mesmo método", "Uma operação ter comportamentos conforme o tipo concreto", "Uma classe herdar várias classes-base em um programa", "Valores numéricos virarem texto automaticamente"],
    81: ["Declarar métodos com implementação", "Criar instância direta com new", "Definir construtores na classe", "Implementar uma ou mais interfaces"],
    85: ["Um método sem nome declarado na classe", "Uma propriedade com campo de apoio gerado pelo compilador", "Um campo de instância definido por outro tipo", "Uma propriedade ligada a uma tabela SQL"],
    86: ["public string Nome { get; private set; }", "public string Nome { private get; set; }", "private string Nome { get; set; }", "public string Nome { get; set; }"],
    87: ["Pode receber outro valor em todo método da própria classe", "Pode receber valor na declaração ou no construtor da classe", "É sempre uma constante de compilação", "Impede alterar o objeto que ele referencia"],
    88: ["Dispensa qualquer teste de unidade", "Permite trocar dependências usadas pela classe", "Elimina a necessidade de interfaces no projeto", "Torna estáticos os métodos da classe"],
    89: ["Uma classe deve ter um único motivo para mudar", "Um projeto só pode ter uma única classe ativa", "Cada classe deve declarar apenas um método", "Um método deve receber somente um parâmetro"],
    90: ["Composição, pois Cachorro contém Animal", "Herança, se Cachorro for um Animal", "Dependência, pois Animal usa Cachorro", "Associação, sem relação entre os tipos"],
}

source = BANK_FILE.read_text(encoding="utf-8")
match = re.search(r"export const BANK = (\[.*?\]);", source, re.S)
assert match, "Banco de questões não encontrado"
bank = json.loads(match.group(1))
assert len(bank) == 90
for question in bank:
    if question["id"] in CHOICES:
        alternatives = CHOICES[question["id"]]
        assert len(alternatives) == 4
        assert len(set(alternatives)) == 4
        question["choices"] = alternatives

replacement = "export const BANK = " + json.dumps(bank, ensure_ascii=False, indent=2) + ";"
source = source[:match.start()] + replacement + source[match.end():]
BANK_FILE.write_text(source, encoding="utf-8")
