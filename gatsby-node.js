const path = require("path");

exports.onCreatePage = async ({page, actions}) =>{
    const {createPage, createRedirect} = actions

    if(page.path.match(/^\/post/)){
        createPage({
            path: "/post",
            matchPath: "/post/:id",
            component: path.resolve("src/pages/post.tsx")
        })
    }

    createRedirect({ fromPath: '/*', toPath: '/'})
}
