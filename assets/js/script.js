
async function checkItems(event){
    var id = event.target.parentNode.parentNode.id;
    var url = `/${id}`
    await fetch(url,{
        method:"put"
    });
}


async function deleteItems(event){
    var id = event.target.parentNode.parentNode.id;
    var url = `/${id}`;
    await fetch(url,{
        method:"DELETE"
    });
    window.location.href = "/";
}



// module.exports = {deleteItems};