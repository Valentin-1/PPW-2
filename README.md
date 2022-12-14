# PPW-2

## Project name: Recenzii pentru gadgeturi electronice
## Entities: https://app.diagrams.net/?src=about#G1Q2QBsoYFijeJAAm-gpfWIUKLxSOn_Lnc

Products
```
{
 product_id: number(PK, autoincrement),
 product_name: string(required, min: 20: max: 100),
 product_image: varbinary(max),
 description: char(required, min: 200: max: 500),
 category_id: int(FK, required to category_id),
 manufacturer_id: int(FK, required to manufacturer_id),
}
```

Users
```
{
 user_id: number(PK, autoincrement),
 fname: string(required, min: 5: max: 50),
 lname: string(required, min: 5: max: 50),
 email: string(required, min: 5: max: 50),
 user_name: string(required, min: 5: max: 50)
}
```

Categories
```
{
 category_id: number(PK, autoincrement),
 category_name: string(required, min: 5: max: 50)
}
```

Comments
```
{
 comment_id: number(PK, autoincrement),
 user_id: number(FK,  required to user_id),
}
```

Likes
```
{
 like_id: int(PK),
 user_id: number(FK,  required to user_id),
 comment_id: number(FK, required to coment_id)
}
```

Manufacturers
```
{
 manufacturer_id: number(PK, autoincrement),
 manufacturer_name: string(required, min: 5: max: 50)
}
````

