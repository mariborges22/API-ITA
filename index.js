const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const Cursinho=require("./Cursinhos/cursinhos");
const Canais=require("./Canais/canais");
const Comunidades=require("./Comunidades/comunidades");
const Sites=require("./Sites/sites");
const connection=require("./database/database");

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

connection.authenticate().then(()=>{
    console.log("Conexão feita com sucesso")
}).catch(error=>{
    console.log(error)
})

app.get("/", (req,res)=>{
    res.send("Api de conteúdos, cursos e dicas para pré-iteanos")
})

app.get("/cursinhos", (req, res) => {
    Cursinho.findAll().then(cursinhos => {
      const response = { "info curso": cursinhos };
      res.status(200).send(response);
    }).catch(err => {
      res.status(500).send("Erro ao buscar cursinhos no banco de dados");
    });
  });
  

app.post("/cursinhos/save", (req,res)=>{
        var nome=req.body.nome;
        var localizacao=req.body.localizacao; // adicionando as variáveis da requisição
        var capacidade=req.body.capacidade;
        var mediaaprovados=req.body.mediaaprovados;
        var modalidades=req.body.modalidades;
    
      if(nome!=undefined && localizacao!=undefined && capacidade!=undefined && mediaaprovados!=undefined && modalidades!=undefined){ // verificando se todas as variáveis estão definidas
                Cursinho.create({
                    nome:nome,
                    localizacao:localizacao, // corrigindo o nome da variável
                    capacidade:capacidade,
                    mediaaprovados:mediaaprovados,
                    modalidades:modalidades
                }).then(cursinho => {
                    res.status(200).send({'info curso': {
                        nome:nome,
                        localizacao:localizacao,
                        capacidade:capacidade,
                        mediaaprovados:mediaaprovados,
                        modalidades:modalidades
                    }}); // retornando o registro criado
                }).catch(err => {
                    console.log(err); // exibindo o erro no console
                    res.status(500).send("Erro ao inserir o registro no banco de dados"); // retornando uma mensagem de erro ao cliente
                });
            } else {
                res.status(400).send("Dados inválidos"); // retornando uma mensagem de erro ao cliente
            }
          });

app.put("/cursinhos/update/:id", (req,res)=>{
  var id = req.params.id;
  var nome = req.body.nome;
  var localizacao = req.body.localizacao;
  var capacidade = req.body.capacidade;
  var mediaaprovados = req.body.mediaaprovados;
  var modalidades = req.body.modalidades;
    Cursinho.update({
      nome:nome,
      localizacao:localizacao,
      capacidade:capacidade,
      mediaaprovados:mediaaprovados,
      modalidades:modalidades
    }, {
      where:{
        id:id
      }
    }).then(()=>{
      res.status(200).send({"info curso":{
        nome: nome,
        localizacao: localizacao,
        capacidade: capacidade,
        mediaaprovados: mediaaprovados,
        modalidades: modalidades
      }})
      }).catch(err=>{
        console.log(err)
        res.status(400).send("Não foi possível atualizar o cursinho")
    })
   
       
  })

app.delete("/cursinhos/delete/:id", (req,res)=>{
  var id = req.params.id;
  

   Cursinho.destroy(  {
         where: {
           id:id
         }
  }).then(()=>{
    res.status(200).send("Cursinho deletado com sucesso")
  }).catch(err=>{
    console.log(err)
    res.status(400).send("Erro ao deletar o cursinho")
  })
})

  


app.get("/canais", (req,res)=>{
    Canais.findAll().then(canais=>{
      const response={"info canais":{canais}}
      res.status(200).send(response)
    }).catch(err=>{
      console.log(err)
      res.status(400).send("Canal não encontrado")
    })
})

app.post("/canais/save", (req,res)=>{
    var nome=req.body.nome
    var foco=req.body.foco
    var criador=req.body.criador
    var inscritos=req.body.inscritos
    var bom=req.body.bom
    if(nome!=undefined && foco!=undefined && criador!=undefined && inscritos!=undefined && bom!=undefined){
        Canais.create({
            nome:nome,
            foco:foco,
            criador:criador,
            inscritos:inscritos,
            bom:bom
        }).then(()=>{
            res.status(200).send({"info canais":{
            nome:nome,
            foco:foco,
            criador:criador,
            inscritos:inscritos,
            bom:bom


            }})
            }).catch(err=>{
                console.log(err)
                res.status(500).send("Erro ao cadastrar o canal no banco de dados")
        })}else{
            res.status(400).send("Dados inválidos")
        }})


app.put("/canais/update/:id", (req,res)=>{
    var id=req.params.id
    var nome=req.body.nome
    var foco=req.body.foco
    var criador=req.body.criador
    var inscritos=req.body.inscritos
    var bom=req.body.bom

    Canais.update({
            nome:nome,
            foco:foco,
            criador:criador,
            inscritos:inscritos,
            bom:bom

    }, {
      where:{
        id:id
      }
    }).then(()=>{
      res.status(200).send({"info canal":{
            nome:nome,
            foco:foco,
            criador:criador,
            inscritos:inscritos,
            bom:bom
      }})
      }).catch(err=>{
        console.log(err)
        res.status(400).send("Não foi possível cadastrar o site no banco de dados")
    })
   
})

app.delete("/canais/delete/:id", (req,res)=>{
  var id=req.params.id
  Canais.destroy({
    where:{
      id:id
    }
  }).then(()=>{
    res.status(200).send("Canal deletado com sucesso")

  }).catch(err=>{
    console.log(err)
    res.status(400).send("Erro ao deletar o canal")
  })
  
})

app.get("/sites", (req,res)=>{
     Sites.findAll().then(sites=>{
        const response={"info sites":{sites}}
        res.status(200).send(response)
  }).catch(err=>{
    res.status(400).send("Site não encontrado")
  })
})

app.post("/sites/save", (req,res)=>{
   var nome=req.body.nome
   var link=req.body.link
   var objetivo=req.body.objetivo
   var criador=req.body.criador

   if(nome!=undefined && link!=undefined && objetivo!=undefined && criador!=undefined){
     Sites.create({
      nome:nome,
      link:link,
      objetivo:objetivo,
      criador:criador
     }).then(()=>{
       res.status(200).send({"info site":{
        nome:nome,
        link:link,
        objetivo:objetivo,
        criador:criador
       }})
     }).catch(err=>{
      res.status(400).send("Não foi possível adicionar esse site no banco de dados")
      console.log(err)
     })
   }else{
    res.status(500).send("Dados inválidos")
   }
})

app.put("/sites/update/:id", (req,res)=>{
  var id=req.params.id
  var nome=req.body.nome
  var link=req.body.link
  var objetivo=req.body.objetivo
  var criador=req.body.criador

  Sites.update({
    nome:nome,
    link:link,
    objetivo:objetivo,
    criador:criador
  }, {
    where:{
      id:id
    }
  }).then(()=>{
    res.status(200).send({"info site":{
      nome:nome,
      link:link,
      objetivo:objetivo,
      criador:criador
    }}).catch(err=>{
      console.log(err)
      res.status(400).send("Não foi possível cadastrar o site no banco de dados")
    })
  })
 
})

app.delete("/sites/delete/:id", (req,res)=>{
  var id=req.params.id;
  Sites.destroy({
    where:{
      id:id
    }
  }).then(()=>{
    res.status(200).send("Site deletado com sucesso")
  }).catch(err=>{
    console.log(err)
    res.status(400).send("Erro ao deletar o site")
  })
})

app.get("/comunidades", (req,res)=>{
  Comunidades.findAll().then(comunidades=>{
    const response= {"info comunidades":{comunidades}}
    res.status(200).send(response)
  }).catch(err=>{
    res.status(400).send("Comunidade não encontrada")
  })
})

app.post("/comunidades/save", (req,res)=>{
  var redesocial=req.body.redesocial;
  var site=req.body.site;
  var membros=req.body.membros
  var focada=req.body.focada
  var moderadores=req.body.moderadores

  

  Comunidades.create({
    redesocial:redesocial,
    site:site,
    membros:membros,
    focada:focada,
    moderadores:moderadores
  }).then(()=>{
    res.status(200).send({"info comunidade":{
      redesocial:redesocial,
      site:site,
      membros:membros,
      focada:focada,
      moderadores:moderadores
  }})
  }).catch(err=>{
    console.log(err)
    res.status(400).send("Não foi possível cadastrar essa comunidade no banco de dados")
    
  })
}
)

app.put("/comunidades/update/:id", (req,res)=>{
  var id=req.params.id
  
  var redesocial = req.body.redesocial;
  var site = req.body.site;
  var membros = req.body.membros;
  var focada = req.body.focada;
  var moderadores = req.body.moderadores;
  Comunidades.update({
    redesocial:redesocial,
    site:site,
    membros:membros,
    focada:focada,
    moderadores:moderadores

  }, {
    where:{
      id:id
    }
  }).then(()=>{
    res.status(200).send({"info comunidades":{
      redesocial:redesocial,
      site:site,
      membros:membros,
      focada:focada,
      moderadores:moderadores
    }})
  }).catch(err=>{
    console.log(err)
    res.status(400).send("erro ao atualizar essa comunidade")
  })
})

app.delete("/comunidades/delete/:id", (req,res)=>{
  var id=req.params.id
  Comunidades.destroy({
    where:{
      id:id
    }
  }).then(()=>{
    res.status(200).send("Comunidade deletada com sucesso")
  }).catch(err=>{
    console.log(err)
    res.status(400).send("erro ao deletar essa comunidade")
  })
})


app.listen(9090,()=>{
    console.log("Servidor rodando numa boa na 9090")
})