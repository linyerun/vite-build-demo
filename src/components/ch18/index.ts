import axios from 'axios'

export function getData(){
    return axios("./public/data.json")
}
