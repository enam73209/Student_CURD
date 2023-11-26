import axios from "axios";


//Student List API Call
export const ListStudentRequest =async ()=>{
    try{
        let res = await axios.get('http://localhost:5010/api/v1/all-students');
            return res.data['data'];
    }catch (e) {
        return [];
    }
}

//Delete Student API Call

export const DeleteStudent = async (id)=>{
        try{
            let res = await axios.get('http://localhost:5010/api/v1/delete-student/'+id);
            if(res.data && res.data['status']==="success"){
                return true;
            }
            else {
                return false;
            }
        }catch (e) {
            return false;
        }
}

export const CreateStudent = async (postBody)=>{
    try {
        let res = await axios.post('http://localhost:5010/api/v1/create-student',postBody);
        if(res.data['status']==="success"){
            return true
        }
        else{
            return false
        }
    }catch (e) {
        return false;
    }
}

