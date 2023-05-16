import { HoverProvider, TextDocument, Position, Hover } from "vscode";

export class EnduranceHoverProvider implements HoverProvider {
  provideHover(document: TextDocument, position: Position): Hover | undefined {
    const wordRange = document.getWordRangeAtPosition(position);
    if (!wordRange) {
      return undefined;
    }

    const hoveredWord = document.getText(wordRange);
    let hoverText = "";

    // Verifique a palavra "hoveredWord" e forneça informações específicas com base no seu contexto.
    // Você pode usar a tabela de símbolos ou outras estruturas de dados para obter informações sobre os elementos.

    // Exemplo de informações de "Hover" para tipos:
    if (hoveredWord === "jib") {
      hoverText = "Tipo de dado inteiro";
    } else if (hoveredWord === "boat") {
      hoverText = "Tipo de dado de ponto flutuante";
    } else if (hoveredWord === "ship") {
      hoverText = "Tipo de dado de ponto flutuante de alta precisão";
    } else if (hoveredWord === "addled") {
      hoverText = "Tipo de dado booleano (verdadeiro ou falso)";
    } else if (hoveredWord === "sailor") {
      hoverText = "Tipo de dado caractere";
    }

    // Exemplo de informações de "Hover" para palavras-chave:
    else if (hoveredWord === "spyglass") {
      hoverText = "Palavra-chave usada para estruturas condicionais 'if'";
    } else if (hoveredWord === "parley") {
      hoverText = "Palavra-chave usada para estruturas condicionais 'else'";
    }
    // ...

    // Verifique outros elementos da linguagem Endurance e forneça informações relevantes.

    // Retorne um objeto Hover com as informações encontradas.
    return new Hover(hoverText);
  }
}
