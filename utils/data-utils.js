export const replaceMongoIdInArray = (arr)=> {
    const mapArray = arr.map((item)=> {
        return {
            id: item._id.toString(),
            ...item
        }
    }).map(({_id, ...rest}) => rest)
    return mapArray

}

export const replaceMongoIdinfoOBject = (obj) => {
    const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};
    return updatedObj;

}