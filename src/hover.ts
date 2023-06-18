import { HoverProvider, TextDocument, Position, Hover } from "vscode";

export class EnduranceHoverProvider implements HoverProvider {
  provideHover(document: TextDocument, position: Position): Hover | undefined {
    const wordRange = document.getWordRangeAtPosition(position);
    if (!wordRange) {
      return undefined;
    }

    const hoveredWord = document.getText(wordRange);
    let hoverText = "";

    // Mapeie as palavras-chave para as informações de "hover" correspondentes
    const keywordInfo: { [key: string]: string } = {
      jib: "Tipo de dado inteiro",
      boat: "Tipo de dado de ponto flutuante",
      ship: "Tipo de dado de ponto flutuante de alta precisão",
      addled: "Tipo de dado booleano (verdadeiro ou falso)",
      sailor: "Tipo de dado caractere",
      spyglass: "Palavra-chave usada para estruturas condicionais 'if'",
      parley: "Palavra-chave usada para estruturas condicionais 'else'"
      // Adicione outras palavras-chave e informações relevantes aqui
    };

    if (hoveredWord in keywordInfo) {
      hoverText = keywordInfo[hoveredWord];
    }

    // Retorne um objeto Hover com as informações encontradas.
    return new Hover(hoverText);
  }
}