let GETCATEGORIES = `
    select c.*,
    json_agg(p.*) as products
    from categories as c
    left join products as p on p.category_id = c.category_id
    group by c.category_id
    `

let GETIMAGES = `
    select * from images
`

let POSTCATEGORIES = `
    insert into categories(category_name) values ($1)  returning *
`

let UPDATECATEGORY = `
    update categories set category_name = $1 where category_id = $2
    returning *
`

let DELETECATEGORY = `
    delete from categories where category_id = $1 returning *;
`

export {
    GETCATEGORIES,
    GETIMAGES,
    POSTCATEGORIES,
    UPDATECATEGORY,
    DELETECATEGORY
}