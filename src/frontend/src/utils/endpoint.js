import { logout } from "./auth";


export const welcome=async()=>{
 return await window.canister.summary.welcome();
}

export const createOrAdd=async(note)=>{
  return await window.canister.summary.createOrAdd(note)
}

export const updateNote=async(note,id)=>{
    return await window.canister.summary.updateNote(note,id)
}

export const getAll=async()=>{
    try{
       return await window.canister.summary.getAll()
    }catch(error){
        if (error.name === "AgentHTTPResponseError"){
          logout()
        }
    }
}
export const deleteAll=async()=>{
  return await window.canister.summary.deleteAll();
}

export const deleteSingle=async(noteId)=>{
   return await window.canister.summary.deleteSingle(noteId)
}

export const searchNotes=async(note)=>{
  return await window.canister.summary.searchNotes(note)
}