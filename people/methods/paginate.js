var paginate=(req, result)=>{
    let page = parseInt(req.query.page) || 1,
        pageSize=Math.min(result.length, 12)      
        start=page*pageSize-pageSize
        end=start+pageSize
        var response={
            noOfRecords:result.length,
            size:12,
            results:result.slice(start, end)
        }
    return response
}

module.exports=paginate;