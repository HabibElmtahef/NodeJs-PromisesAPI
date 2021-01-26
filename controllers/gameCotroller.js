const mysql = require('../database/db')

const GameController = {
    getGames: async (req, res) => {
        try {
            const games = await mysql.execute('SELECT * FROM game');
            res.json(games[0])
        } catch (error) {
            res.status(400).send(error)
        }
    },
    gatGame: async(req, res, next) => {
        try {
            const id = req.params.id
            const game = await mysql.execute('SELECT * FROM game WHERE id = ?', [id])
            if(game[0].length == 0) res.json({msg: "Game Not Introuvable"})
            else res.send(game[0][0])
        } catch (error) {
            
        }
    },
    t: async (req, res) => {
        const games = await mysql.execute("SELECT * FROM game WHERE name LIKE 't%' ")
        res.send(games[0])
    },
    addGame: async (req, res) => {
        try {
            const data = req.body
            const game = await mysql.execute('INSERT INTO game(name, genre) VALUES(?, ?)', [data.name, data.genre])
            res.status(200).send(game[1])
        } catch (error) {
            res.status(400).json({error})
        }
    },
    deleteGame: async (req, res) => {
        try {
            const id = req.params.id
            const deleted = await mysql.execute("DELETE FROM game WHERE id = ?", [id])
            if(deleted) res.json({message: "Deleted Bi Naja7"})
            else res.send('Matm7ash')
        } catch (error) {
            
        }
    },
    updateGame: async (req, res) => {
        const {name, genre} = req.body
        const id = req.params.id
        const updated = mysql.execute("UPDATE game SET name = ?, genre = ? WHERE id = ?",[name, genre, id])
        if(updated) res.json({message: "updated Bi Naja7"})
        else res.json({message: "Not updated Bi Naja7"})
    }

}

/*==========     SELECT * FROM categorie cat INNER JOIN game gm ON gm.categorieId = cat.id WHERE cat.id = 1        ====================*/
module.exports = GameController