

const DBG_SEARCH_ENABLED = false
const DBG_LOGIN_ENABLED = false
const DBG_SHIPMENT_LIST_ENABLED = false
const DBG_MAP_ENABLED = false
const DBG_SHIPMENT_TILE_ENABLED = false
const DBG_SHIPMENT_DETAIL_ENABLED = false
const DBG_SHIPMENT_MAP_ENABLED = false
const DBG_REDUCER_ACTIONS_ENABLED = false
const DBG_API_ENABLED = false


export const DBG_API = "DBG_API"
export const DBG_SEARCH = "DBG_SEARCH"
export const DBG_LOGIN = "DBG_LOGIN"
export const DBG_SHIPMENT_LIST = "DBG_SHIPMENT_LIST"
export const DBG_MAP = "DBG_MAP"
export const DBG_SHIPMENT_TILE = "DBG_SHIPMENT_TILE"
export const DBG_SHIPMENT_DETAIL = "DBG_SHIPMENT_DETAIL"
export const DBG_SHIPMENT_MAP = "DBG_SHIPMENT_MAP"
export const DBG_REDUCER_ACTIONS = "DBG_REDUCER_ACTIONS"




export const knlog = (tag, message) =>{

    switch(tag) {
    case DBG_SEARCH:
        if (!DBG_SEARCH_ENABLED) {
            return
        }
        break;
    case DBG_LOGIN:
        if (!DBG_LOGIN_ENABLED) {
            return
        }  
        break;
    
    case DBG_SHIPMENT_LIST:
        if (!DBG_SHIPMENT_LIST_ENABLED) {
            return
        }
        break;
    case DBG_MAP:
        if (!DBG_MAP_ENABLED) {
            return
        }  
        break;  
    case DBG_SHIPMENT_TILE:
        if (!DBG_SHIPMENT_TILE_ENABLED) {
            return
        }
        break  
    case DBG_SHIPMENT_DETAIL:
        if (!DBG_SHIPMENT_DETAIL_ENABLED) {
            return
        }
        break      

    case DBG_SHIPMENT_MAP:
        if (!DBG_SHIPMENT_MAP_ENABLED) {
            return
        }
        break    

    case DBG_REDUCER_ACTIONS:
        if (!DBG_REDUCER_ACTIONS_ENABLED) {
            return
        }
        break 

    case DBG_API:
        if (!DBG_API_ENABLED) {
           return
        }
        break     
    }
    
    console.log(tag, " :: ", ...message)
    
}