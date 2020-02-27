function route(path, handle) {
    console.log("Ruteando un request a " + path);
    if (typeof handle[path] === 'function')
    {
        return handle[path]();
    }else console.log("No hay handler definido para " + path) ;
}

exports.route = route;