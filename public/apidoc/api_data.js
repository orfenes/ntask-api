define({ "api": [
  {
    "type": "post",
    "url": "/token",
    "title": "Token autenticado",
    "group": "Credencial",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email de usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada",
          "content": "{\n  \"email\": \"john@connor.net\",\n  \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de usuário autenticado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"xyz.abc.123.hgf\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de autenticação",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/token.js",
    "groupTitle": "Credencial",
    "name": "PostToken"
  },
  {
    "type": "get",
    "url": "/API",
    "title": "Status",
    "group": "Status",
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status",
    "name": "GetApi"
  }
] });
