const games= require ("../model/games.json");
const fs = require("fs")

const getAll = (req,res) => {
    console.log (req.url);
    res.status (200).send (games);
};

const getByID= (req,res)=>{
    const id = req.params.id;
    const gamesFiltrado= games.find ((games) => games.id == id)
    if(id==id){
    res.status(200).send(gamesFiltrado);
} else
res.status(404).send({message:'Iiii, algo deu errado'});
}

const postGames = (req,res)=>{
    console.log(req.body);
    try{
const {id,title,launchYear,consoles,liked,stages}= req.body;
    games.push({id,title,launchYear,consoles,liked,stages});

    fs.writeFile("./src/model/games.json", JSON.stringify(games),'utf8',function(err){
        if(err){
            return res.status(424).send ({message: err});
        }
        console.log ("Arquivo Atualizado com Sucesso!");
    });

    res.status(200).send(games);
}catch(err){
    return res.status(500).send({message:'Iiii, algo deu errado'});
}
};

const deleteGames = (req,res)=>{
    const id = req.params.id;
    try {
      const gamesFiltrado = games.find((games) => games.id ==id);
    const index = games.indexOf(gamesFiltrado);
  
    games.splice(index,4);
  
    fs.writeFile("./src/model/games.json", JSON.stringify(games),'utf8',function(err){
      if (err){
        return res.status(424).send ({message: 'Registro não encontrado'});
      }
      console.log ("Arquivo atualizado com Sucesso!");
    });
  
    res.status(200).send(games);
    } catch(err) {
      return res.status(500).send({message: err})
    }
  };

  const putGames = (req,res) =>{
    try{
        const id = req.params.id;
        const gamesASerModificado = games.find((games) => games.id == id);
    
        const gamesAtualizado = req.body;
    
        const index = games.indexOf(gamesASerModificado);
    
        games.splice(index,1,gamesAtualizado);
    
        fs.writeFile("./src/model/games.json", JSON.stringify(games),'utf8',function(err){
          if (err){
            return res.status(424).send ({message: err});
          }
          console.log ("Arquivo atualizado com Sucesso!");
        });
    
        res.status(200).send(games);
      }catch(err){
      return res.status(424).send({message:err});
    }
  }

  const patchGames = (req,res) => {
    const id = req.params.id;
    const atualizacao = req.body;

    try {
      const gamesASerModificado= games.find((games)=> games.id == id);

      Object.keys(atualizacao).forEach((chave)=> {
        gamesASerModificado[chave] = atualizacao[chave]
      })
      console.log(gamesASerModificado)

      fs.writeFile("./src/model/games.json", JSON.stringify(games),'utf8',function(err){
        if (err){
          return res.status(424).send ({message: err});
        }
        console.log ("Arquivo atualizado com Sucesso!");
      });

     return res.status(200).send(games);

    } catch(err){
      return res.status(424).send({message: err});
    }
  }



module.exports={
    getAll,
    getByID,
    postGames,
    deleteGames,
    putGames,
    patchGames
}