const path = require("path");

exports.onCreatePage = async ({page, actions}) =>{
    const {createPage, createRedirect} = actions

    createRedirect({ fromPath: '/*', toPath: '/'})
}
