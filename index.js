console.log('from index.js')
const BUY_CAKE = 'BU_CAKE'
// {
//     type: BUY_CAKE
//     info: 'First redux action'
// }

function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    } 
}
