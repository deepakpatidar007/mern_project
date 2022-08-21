const postReducer = (
    state = {posts:[], loading:false,uploading:false, error:false},
    action
    )=>{
        
        switch(action.type){
            case "UPLOAD_START":
                return {...state,uploading:true,error:false}
            
            case "UPLOAD_SUCCESS":
                return {...state,posts:[action.data,...state.posts],uploading:false,error:false}
                
            case "UPLOAD_FAIL":
                return {...state,uploading:false,error:true}
                
            case "RETREIVING_START":
                return {...state,uploading:false,error:false}
                
            case "RETREIVING_SUCESS":
                return {...state,posts:[...action.data],uploading:false,error:false}
    
            case "RETREIVING_FAIL":
                return {...state,uploading:false,error:true}
            

            default:
                return state
        }
    }

    export default postReducer