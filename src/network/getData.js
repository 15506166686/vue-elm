import {getStore} from "@/utils/mUils";
import {request} from "@/network/request";

/**
 * 获取用户信息
 */

export const getUser = () => request({url: '/v1/user', params: {user_id: getStore('user_id')}});


/**
 * 获取首页默认地址
 */

export const cityGuess = () => request({url: '/v1/cities', params: {type: 'guess'}});


/**
 * 获取首页热门城市
 */

export const hotCity = () => request({url: '/v1/cities', params: {type: 'hot'}});


/**
 * 获取首页所有城市
 */

export const groupCity = () => request({url: '/v1/cities', params: {type: 'group'}});


/**
 * 获取当前所在城市
 */

export const currentCity = number => request({url: '/v1/cities/' + number});

/**
 * 获取搜索地址
 */

export const searchPlace = (cityId, value) => request({
  url: '/v1/pois',
  params: {
    type: 'search',
    city_id: cityId,
    keyword: value
  }
});
