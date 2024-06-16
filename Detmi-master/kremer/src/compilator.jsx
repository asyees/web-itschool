import axios from "axios"

export const Sendcode = async(code, langid, taskid) => {
    const encodeCode = btoa(code)
    const token = window.localStorage.getItem('token'); 

    const {data} = await axios.post(`http://localhost:5000/api/${langid}/${taskid}/giveanswer`, {
        code : encodeCode
    },
    {
        headers: {
            'Authorization': `Bearer ${token}`
        }}
    )
    return data.message
}

export const sendTask = async(input, output, code, langid ) => {
    
    const encodeCode = btoa(code)
    const encodeInput = btoa(input)
    const {data} = await axios.post(`http://localhost:5000/api/${langid}/justtask`, {
        code : encodeCode,
        input : encodeInput,
        output : output
    }
    )
    return data.message
}