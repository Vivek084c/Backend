// to insert a document
db.inventory.insertOne(
    {item : "canvas" , qnt : 100 , tags : ["cotton"]},{ size : {h : 28, w : 35.5, uom : "cm"} }
)


db.inventory.insertMany(
    [{item : "canvas1" , qnt : 23 , tags : ["cotton"]},{ size : {h : 28, w : 35.5, uom : "cm"} },
    {item : "canvas2" , qnt : 44 , tags : ["copper"]},{ size : {h : 28, w : 35.5, uom : "cm"} },
    {item : "canvas3" , qnt : 55 , tags : ["zinc"]},{ size : {h : 28, w : 35.5, uom : "cm"} },
    {item : "canvas4" , qnt : 11 , tags : ["aluminum"]},{ size : {h : 28, w : 35.5, uom : "cm"} }]
)