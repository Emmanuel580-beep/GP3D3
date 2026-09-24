const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/verify/:reference", async(req,res)=>{

    try{

        const response = await axios.get(

            `https://api.paystack.co/transaction/verify/${req.params.reference}`,

            {

                headers:{

                    Authorization:`Bearer ${process.env.PAYSTACK_SECRET_KEY}`

                }

            }

        );

        res.json(response.data);

    }

    catch(err){

        res.status(500).json({

            status:false,

            message:"Verification Failed"

        });

    }

});

app.listen(3000,()=>{

    console.log("GP3D Payment Server Running on Port 3000");

});
