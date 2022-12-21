/**
 * Made self made pagination function for
 * showing a bucnh of data a page wise format 
 * @param {data length(integer)} len 
 * @param {data itself as array} arr 
 * @returns
 */

export function Pagination(len,arr){
    let newarr = []

    let total_page = '';
    if(arr.length%5 != 0){
        total_page = (arr.length/5)+1

        for(let n = 0; n <= total_page-1; n++){
        newarr.push(new Array())
    }
    }else{
        total_page = arr.length/5
        for(let n = 0; n <= total_page-1; n++){
            newarr.push(new Array())
        }
    }
            
    let count = 0;
    let j = 0;
    for(let m = 0; m <= newarr.length-1; m++){
        for(j; j <= arr.length; j++){    
            if(count == 5){
                count = 0;
                break;
            }else if(arr[j] == undefined){
                break;
            }else{       
                newarr[m].push(arr[j])
                count++;
            }
        }
    }

    return newarr
}