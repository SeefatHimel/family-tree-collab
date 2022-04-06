import axios from "axios";
import Types from "./tree.types";


export function getTree(data) {  
    return {
        type: Types.GET_TREE,
        payload: data,
    };
}