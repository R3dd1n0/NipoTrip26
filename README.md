# Japão 2026 🇯🇵⛩

Site estático com o plano da nossa viagem ao Japão (2 casais, 22 dias).
Feito para rodar direto no **GitHub Pages**, sem build.

## Como ver

- **Online:** publique pelo GitHub Pages (veja abaixo).
- **Local:** abra o `index.html` no navegador, ou rode um servidor simples:
  ```bash
  python3 -m http.server 8000
  # depois acesse http://localhost:8000
  ```

## Como atualizar o plano

**Edite apenas o arquivo `data.js`.** Ele é a fonte de verdade: roteiro,
voos, orçamento, pessoas, pendências etc. O layout lê tudo de lá — você não
precisa mexer no HTML/CSS/JS para mudar o conteúdo.

Cada seção do `data.js` está comentada. Convenções úteis:

- No **roteiro**, o campo `quem` pode ser `"todos"`, `"felipana"` ou
  `"thamandro"` (alimenta o filtro de abas da semana separada).
- `tbd: true` marca um item como **"a confirmar"** (aparece com selo).

## Estrutura dos arquivos

| Arquivo       | Papel                                           |
| ------------- | ----------------------------------------------- |
| `index.html`  | Estrutura das seções (esqueleto, sem dados)     |
| `data.js`     | **Todos os dados da viagem** (editar aqui)      |
| `app.js`      | Renderiza o site a partir do `data.js`          |
| `styles.css`  | Estilo (pôster de viagem japonês, mobile-first) |

## Recursos

- Contagem regressiva ao vivo até o pouso em Haneda (21/11/2026).
- Timeline do roteiro com filtro Todos · Felipana · Thamandro.
- Tabelas de voos e orçamento + conversor de câmbio ¥→R$.
- Checklist de pendências (salvo no navegador).
- Botão imprimir / salvar PDF do roteiro.

## Publicar no GitHub Pages

1. Faça push para o repositório.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
3. Escolha a branch e a pasta `/ (root)` e salve.
4. O site fica em `https://<usuario>.github.io/<repo>/`.
