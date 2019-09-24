
## NodeJS CRUD Assignment
 
  

### GET Product

```
/products
```

### GET Product By ID

```
/products/:id
```

### POST Product

```
/products
```

#### Request 

```
{
	"name": "Apple",
	"price":  "250"
}
```

### PUT Product

```
/product/:id
```

#### Request

```
{
    "updateData" :
    {
        "name" : "Apple X",
        "price" : "340"
    }
}
```

### DELETE Product

```
/product/:id
```