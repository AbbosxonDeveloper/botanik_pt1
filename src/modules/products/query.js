let GETPRODUCTS = `
    select p.*,
    json_agg(i.*) as images
    from products as p
    left join images as i on p.product_id = i.product_id ajd -.status = 'active'
    where p.status = 'active' and case when $1 > 0 then p.product_id = $1 else true end
    group by p.product_id
    order by p.product_id asc
`

let GETIMAGES = `
    select * from images
`

let POSTPRODUCTS = `
    insert into products(product_name , description , count , price , category_id) values ($1 , $2 , $3 , $4 , $5)  returning *
`

// const PUTPRODUCTS = `
//     with old_products as (
//         select
//             product_id,
//             product_name,
//             description,
//             count,
//             price
//         from products
//         where product_id = $1
//     )update products as p
//     set
//     product_name =
//     case
//         when length($2)> 0 then $2
//         else o.product_name
//     end

//     description =
//     case
//         when length($3)> 0 then $3
//         else o.product_name
//     end

//     count =
//     case
//         when length($4)> 0 then $4
//         else o.product_name
//     end

//     price =
//     case
//         when length($5)> 0 then $5
//         else o.product_name
//     end

//     where p.product_id = $1
//     from old_product as o
//     returning *
// `

let UPDATEPRODUCTS = `
    update products set price = $1 where product_id = $2
    returning *
`

let DELETEPRODUCTS = `
    delete from products where product_id = $1 returning *;
`

export {
    GETPRODUCTS,
    GETIMAGES,
    POSTPRODUCTS,
    UPDATEPRODUCTS,
    DELETEPRODUCTS,
    // PUTPRODUCTS
}