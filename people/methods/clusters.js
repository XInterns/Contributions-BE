var clusters=["knowledge sharing","mobile","recruitment","open source","development","technologies",
"organising","devops","companies","clients","languages","Testing"];

var cluster_values=new HashMap();

var values=[{1: "Workshop",
             2:"Xke",
             3:"Thedevtheory",
             4:"Webinar",
             5:"Conference",
             6:"Bootcamp",
             7:"Pydata",
             8: "Ignite",
             9: "Meetup",
            },
            {1: "Android",
            2:"Mobile",
            3:"Ios",
            },
            {1:"Hiring",
            2:"Amity",
            3:"UPES",
            4:"Dtu",
            },
            {1:"Github",
            2:"Git",
            3:"Development",
            } ,
            {1:"node",
            2:"js",
            3:"Android",
            4:"Ios",
            5:"React",
            6:"Ruby",
            7:"Rails",
            8:"Rest",
            9:"Server"
            },
            {1:"Github",
            2:"Git",
            3:"Azure",
            4:"Machine learning",
            5:"Big Data",
            6:"Angular",
            7:"Cloud",
            8:"Devops",
            9:"Node",
            10:"Asp",
            11:"React",
            12:"Agile",
            13:"Shelly",
            14:"Haskell"
            },
            {1:"Workshop",
            2:"Hackathon",
            3:"Thedevthoery",
            4:"Recruitment",
            5:"Webinar",
            6:"Conference",
            },
            {1:"Docker",
            2:"Jenkins",
            3:"Selenium",
            4:"Travis",
            },
            {1:"Microsoft",
            2:"Github",
            3:"Xamarin",
            4:"Saxo",
            5:"Google",
            6:"Boston Scientific"
            },
            {1:"Microsoft",
            2:"Mckinsey",
            3:"Xamarin",
            4:"Saxo",
            5:"Spicejet"
            },
            {1:"Rails",
            2:"Python",
            3:"C",
            4:"js",
            5:"Html",
            6:"Css",
            7:"Php",
            8:"Java",
            9:"Javascript"
            },
            {
             1: "Units",
             2: "BDD",
             3: "TDD",
             4: "Junit",
             5: "Mocha",
             6: "Chai"
            }

                  ];

for(var i=0;i<clusters.length;i++)
     {
         cluster_values.set(clusters[i],values[i]);
         
     }
module.exports=cluster_values;