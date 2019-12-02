#Node Presenter

Simple application to visualize JSONs containing tree like structure.

Example JSON:

```
[
   {
      "id":1,
      "name":"A",
      "nodes":[
         {
            "id":2,
            "name":"AA",
            "nodes":[
               {
                  "id":3,
                  "name":"AA1",
                  "nodes":[

                  ]
               },
               {
                  "id":4,
                  "name":"AA2",
                  "nodes":[

                  ]
               }
            ]
         },
         {
            "id":5,
            "name":"AB",
            "nodes":[

            ]
         }
      ]
   }
]
```

##Running Instructions:

Install dependencies:

`npm install`

Run app in development mode:

`npm start`

Open [http://localhost:3000](http://localhost:3000)