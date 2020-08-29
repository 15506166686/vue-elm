import {getStore} from "@/utils/mUils";
import {request} from "@/network/request";

/**
 * 获取用户信息
 */

export const getUser = () => request({url: '/v1/user', params: {user_id: getStore('user_id')}});
