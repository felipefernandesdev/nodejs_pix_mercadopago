# nodejs_pix_mercadopago

Modelo de Integração PIX usando Mercado Pago

## Descrição
Esta aplicação demonstra como integrar o sistema de pagamentos PIX com a plataforma Mercado Pago utilizando Node.js.

## Requisitos
- Node.js v14 ou superior
- Conta no Mercado Pago
- Chave de API do Mercado Pago

## Instalação
1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/nodejs_pix_mercadopago.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd nodejs_pix_mercadopago
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Uso
1. Configure as variáveis de ambiente no arquivo `.env`:
    ```
    MERCADO_PAGO_ACCESS_TOKEN=your_access_token
    ```

2. Inicie a aplicação:
    ```bash
    npm start
    ```

3. Acesse a aplicação em `http://localhost:3000`.

## Funcionalidades
- Criação de cobranças PIX
- Consulta de status de pagamento
- Webhooks para notificações de pagamento

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença
Este projeto está licenciado sob a licença MIT.
