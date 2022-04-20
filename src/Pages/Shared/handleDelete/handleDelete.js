


const deleteOrder = (id) =>{
    console.log(id)
    const url = `https://pacific-ridge-36287.herokuapp.com/deleteOrder/${id}`
    const proceed = window.confirm("Are you sure you want to Delate ");
    if(proceed){
        console.log('okey')
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => {
            if(res.status === 200){
                alert('Order Removed')
            }
        })

    }
}
export default deleteOrder