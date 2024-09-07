import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-att-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './att-componente.component.html',
  styleUrl: './att-componente.component.css'
})
export class AttComponenteComponent {
    componente1: string = "Olá, meu nome é vinicius!";
    componente2: string[] = ['JS', 'HTML', 'ANGULAR', 'REACT'];
    contador: number = 0;

    linguagemSelecionada: string = 'JS'
    descricoes: { [key: string]: string } = {
      JS: 'JavaScript é uma linguagem de programação que permite criar conteúdo dinâmico em páginas web.',
      html: 'HTML (HyperText Markup Language) é a linguagem padrão para criar páginas web.',
      css: 'CSS (Cascading Style Sheets) é uma linguagem usada para descrever a apresentação de um documento HTML.' 
    }

    incrementar() {
      this.contador++;
    }

    decrementar() {
      this.contador--;
    }

    enviar(nome: string) {
      alert(`Nome enviado: ${nome}`);
    }
    
    mudarLinguagem(linguagem: string) {
      this.linguagemSelecionada = linguagem
    }
}
