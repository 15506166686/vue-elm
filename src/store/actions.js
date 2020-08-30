import {getUser} from "@/network/getData";

import {GET_USERINFO} from "@/store/mutation-types";

export default {
  async getUserInfo({
    commit,
    state
    }){
    let res = await getUser()
    // console.log(res)
    commit(GET_USERINFO, res)
  }
}