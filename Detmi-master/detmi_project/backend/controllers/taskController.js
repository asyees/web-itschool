const { default: axios } = require('axios');
const { attributes } = require('../db');
const ApiError = require('../erorr/ApiError');
const { where, json } = require('sequelize');
const {User, Leaderboard, Course, Task,  Usertask } = require('../models/models')
const sequelize = require('../db')
class taskController {
    async giveAnswer(req, res, next) {
        const USERID = req.user.id;
        try {
            const langId = parseInt(req.params.langId, 10);
            const taskId = parseInt(req.params.taskId, 10);
            console.log(`UserID: ${USERID}, langId: ${langId}, taskId: ${taskId}`);

            const task = await Task.findOne({
                where: { id: taskId },
                attributes: ["title", "text", "rating", "inputOutputId"]
            });
            const inputOutputId = task.inputOutputId
            if (!task) {
                console.log('Task not found');
                return res.status(404).json({ message: 'Task not found' });
            }
            const [result] = await sequelize.query(`
            SELECT inputoutputs.id, inputoutputs.input, inputoutputs.output 
            FROM tasks
            JOIN inputoutputs ON tasks.inputOutputId = inputoutputs.id
            WHERE tasks.id = ${taskId};
            `)
            const inputs = result[0].input;
            const stringInput = inputs.toString()
            const outputs = result[0].output;
            const stringOutput = outputs.toString()
            console.log(`inputs: ${inputs}`);
            const { title, text, rating: ratingfortask} = task;
            console.log(`Task: ${JSON.stringify(task)}`);

            const code = req.body.code;
            console.log(`Code: ${code}`);
            console.log(`inputs: ${inputs}`);
            const sdin = Buffer.from(stringInput, 'utf-8').toString('base64');
            const sdout = Buffer.from(stringOutput, 'utf-8').toString('base64');

            const optionsForPost = {
                method: 'POST',
                url: 'https://judge0-ce.p.rapidapi.com/submissions',
                params: {
                    base64_encoded: 'true',
                    fields: '*'
                },
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '5df980e790mshb0b51e43c2f1903p1fd09djsn584c6e29dc67',
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                },
                data: {
                    language_id: langId,
                    source_code: code,
                    stdin: sdin
                }
            };

            try {
                const responseFromPost = await axios.request(optionsForPost);
                console.log(`Response from POST: ${JSON.stringify(responseFromPost.data)}`);
                const token = responseFromPost.data.token;
                const optionsForGet = {
                    method: 'GET',
                    url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
                    params: {
                        base64_encoded: 'true',
                        fields: '*'
                    },
                    headers: {
                        'X-RapidAPI-Key': '5df980e790mshb0b51e43c2f1903p1fd09djsn584c6e29dc67',
                        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                    }
                };

                setTimeout(async () => {
                    try {
                        const responseFromGet = await axios.request(optionsForGet);
                        console.log(`Response from GET: ${JSON.stringify(responseFromGet.data)}`);
                        const { stdout: outputFromGet, stderr: errorFromGet } = responseFromGet.data;
                        console.log(`outputFromGet ${outputFromGet}, errorFromGet ${errorFromGet}`);
    
                        let decodedOutputFromGet;
                        let decodedErrorFromGet;
    
                        if (outputFromGet) {
                            decodedOutputFromGet = Buffer.from(outputFromGet, 'base64').toString('utf-8').trim();
                        } else {
                            decodedOutputFromGet = '';
                        }
    
                        if (errorFromGet) {
                            decodedErrorFromGet = Buffer.from(errorFromGet, 'base64').toString('utf-8').trim();
                        } else {
                            decodedErrorFromGet = '';
                        }
    
                        if (decodedErrorFromGet) {
                            console.log(`Error from GET: ${decodedErrorFromGet}`);
                            return res.json({ message: decodedErrorFromGet });
                        }
    
                        
                        if (decodedOutputFromGet.trim() == outputs) {
                            await sequelize.query(`
                                UPDATE leaderboards
                                SET rating = rating + ${ratingfortask}
                                WHERE userId = ${USERID};
                            `);
                            await sequelize.query(`
                                UPDATE usertasks
                                SET status = 'Решено'
                                WHERE userId = ${USERID} AND taskId = ${taskId};
                            `);
                            return res.json({
                                message: `Ожидаемый ответ: ${outputs}, Ваш ответ: ${decodedOutputFromGet.trim()}. Задача решена верно, вы получили ${ratingfortask} рейтинга.  входные данные ${stringInput}`,
                                completed: "yes",
                                rating: ratingfortask
                            });
                        } else {
                            await sequelize.query(`
                                UPDATE usertasks
                                SET status = 'Не решено'
                                WHERE userId = ${USERID} AND taskId = ${taskId};
                            `);
                            return res.json({
                                message: `Ожидаемый ответ: ${outputs}, Ваш ответ: ${decodedOutputFromGet.trim()}. Задача решена неверно.   входные данные ${stringInput}`,
                                completed: "no"
                            });
                        }
                    } catch (error) {
                        console.error(`Error while fetching submission result: ${error}`);
                        return res.status(500).json({ message: 'Error while fetching submission result' });
                    }
                }, 5000); // ожидание 5 секунд
            } catch (error) {
                console.error(`Error during POST request to Judge0 API: ${error}`);
                return res.status(500).json({ message: 'Error during POST request to Judge0 API' });
            }
        } catch (error) {
            console.error(`Error while processing the answer: ${error}`);
            return res.status(500).json({ message: 'Error while processing the answer' });
        }
    }
    async justtask(req, res, next) {
        // const USERID = 8
        try {
            const langId = parseInt(req.params.langId, 10);
            console.log(`langId: ${langId}`);
            const input = req.body.input;
            const output = req.body.output;
            const code = req.body.code;
            const sdout = Buffer.from(output, 'utf-8').toString('base64');

            // Настройки для запроса к Judge0 API
            const optionsForPost = {
                method: 'POST',
                url: 'https://judge0-ce.p.rapidapi.com/submissions',
                params: {
                    base64_encoded: 'true',
                    fields: '*'
                },
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '5df980e790mshb0b51e43c2f1903p1fd09djsn584c6e29dc67',
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                },
                data: {
                    language_id: langId,
                    source_code: code,
                    stdin: input
                }
            };

            try {
                const responseFromPost = await axios.request(optionsForPost);
                console.log(`Response from POST: ${JSON.stringify(responseFromPost.data)}`);
                const token = responseFromPost.data.token;

                // Настройки для запроса получения результата
                const optionsForGet = {
                    method: 'GET',
                    url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
                    params: {
                        base64_encoded: 'true',
                        fields: '*'
                    },
                    headers: {
                        'X-RapidAPI-Key': '5df980e790mshb0b51e43c2f1903p1fd09djsn584c6e29dc67',
                        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                    }
                };

                setTimeout(async () => {
                    try {
                        const responseFromGet = await axios.request(optionsForGet);
                        console.log(`Response from GET: ${JSON.stringify(responseFromGet.data)}`);
                        const { stdout: outputFromGet, stderr: errorFromGet } = responseFromGet.data;
                        console.log(`outputFromGet ${outputFromGet}, errorFromGet ${errorFromGet}`);
    
                        let decodedOutputFromGet;
                        let decodedErrorFromGet;
    
                        if (outputFromGet) {
                            decodedOutputFromGet = Buffer.from(outputFromGet, 'base64').toString('utf-8').trim();
                        } else {
                            decodedOutputFromGet = '';
                        }
    
                        if (errorFromGet) {
                            decodedErrorFromGet = Buffer.from(errorFromGet, 'base64').toString('utf-8').trim();
                        } else {
                            decodedErrorFromGet = '';
                        }
    
                        if (decodedErrorFromGet) {
                            console.log(`Error from GET: ${decodedErrorFromGet}`);
                            return res.json({ message: decodedErrorFromGet });
                        }
    
                        
                        if (decodedOutputFromGet.trim() == output) {
                            return res.json({
                                message: `Ожидаемый ответ: ${output}, Ваш ответ: ${decodedOutputFromGet.trim()}. Задача решена верно, входные данные ${Buffer.from(input, 'base64').toString('utf-8')}`,
                                completed: "yes"
                            });
                        } else {
                            return res.json({
                                message: `Ожидаемый ответ: ${output}, Ваш ответ: ${decodedOutputFromGet.trim()}. Задача решена неверно. входные данные ${Buffer.from(input, 'base64').toString('utf-8')}`,
                                completed: "no"
                            });
                        }
                    } catch (error) {
                        console.error(`Error while fetching submission result: ${error}`);
                        return res.status(500).json({ message: 'Error while fetching submission result' });
                    }
                }, 5000); 
            } catch (error) {
                console.error(`Error during POST request to Judge0 API: ${error}`);
                return res.status(500).json({ message: 'Error during POST request to Judge0 API' });
            }
        } catch (error) {
            console.error(`Error while processing the answer: ${error}`);
            return res.status(500).json({ message: 'Error while processing the answer' });
        }
    }



    async getAllTasks(req, res){
        const USERID = req.user.id;
        console.log(USERID)
    try {
        const tasks = await sequelize.query(
            `SELECT 
                tasks.id, 
                tasks.title, 
                tasks.rating,
                usertasks.status
            FROM tasks
            LEFT JOIN usertasks ON tasks.id = usertasks.taskId
            WHERE usertasks.userId = :userId`, {
                replacements: { userId: USERID },
                type: sequelize.QueryTypes.SELECT
            }
        );
        console.log(tasks)
        return res.json({tasks});
    } catch (error) {
        return res.status(500).json({ message: "Ошибка при получении данных" });
    }
}
    

    async getOneTask(req, res) {
        try {
            const USERID = req.user.id; 
            const taskId = parseInt(req.params.taskId, 10);
    
            console.log(`Fetching task with ID: ${taskId} for user: ${USERID}`);
    
            const task = await Task.findOne({
                where: {
                    id: taskId
                },
                attributes: ["title", "text", "rating"]
            });
    
            if (!task) {
                console.log(`Task with ID: ${taskId} not found`);
                return res.status(404).json({ message: 'Task not found' });
            }
    
            console.log(`Task found: ${JSON.stringify(task)}`);
            return res.json({task});
        } catch (error) {
            console.error('Error while fetching task:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    

}

module.exports = new taskController()