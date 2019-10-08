let express = require('express');
let db = require('./db/index');
let cityMoudle = require('./moudles/citiesMoudle');
let app = express();

db.then(() => {
    app.get('/get_all_provice', async (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        try {
            let result = await cityMoudle.find({
                level: 1
            }, {
                name: 1,
                province: 1,
                _id: 0
            });
            res.send({
                state: 1,
                data: result
            });
        } catch (error) {
            console.log(error);
            res.send({
                state: 0,
                err: '查询时出现错误'
            })
        }
    })
    app.get('/get_cities_by_provice', async (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        let {province} = req.query
        try {
            let result = await cityMoudle.find({
                level: 2,
                province

            }, {
                name: 1,
                city: 1,
                _id: 0
            });
            res.send({
                state: 1,
                data: result
            });
        } catch (error) {
            console.log(error);
            res.send({
                state: 0,
                err: '查询时出现错误'
            })
        }
    })
    app.get('/get_counties_by_provice_and_city', async (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        let {province,city} = req.query
        try {
            let result = await cityMoudle.find({
                level: 3,
                province,
                city

            }, {
                name: 1,
                code: 1,
                _id: 0
            });
            res.send({
                state: 1,
                data: result
            });
        } catch (error) {
            console.log(error);
            res.send({
                state: 0,
                err: '查询时出现错误'
            })
        }
    })

}, (err) => {
    console.log(err);
})
app.listen(3000, (err) => {
    if (!err) {
        console.log('服务器启动成功了')
    } else {
        console.log(err)
    }
})