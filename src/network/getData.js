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

/**
 * 获取图片验证码
 */

export const getcaptchas = () => request({
  url: '/v1/captchas',
  data: {},
  method: 'POST'
})

/**
 * 检测帐号是否存在
 */

export const checkExist = (checkNumber, type) => request({
  url: '/v1/users/exists',
  data: {
    [type]: checkNumber,
    type
  }
});

/**
 * 账号密码登录
 */

export const accountLogin = (username, password, captcha_code) => request({
  url: '/v2/login',
  data: {username, password, captcha_code},
  method: 'post'
});

/**
 * 获取msite页面地址信息
 */

export const msiteAddress = geoHash => request({
  url: '/v2/pois/' + geoHash
});

/**
 * 退出登录
 */
export const signout = () => request({
  url: '/v2/signout'
});

/**
 * 获取msite页面食品分类列表
 */

export const msiteFoodTypes = geoHash => request({
  url: '/v2/index_entry',
  params: {
    geoHash,
    group_type: '1',
    'flags[]': 'F'
  }
});

/**
 * 获取msite商铺列表
 */

export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
  let supportStr = '';
  support_ids.forEach(item => {
    if (item.status) {
      supportStr += '&support_ids[]=' + item.id;
    }
  });
  let data = {
    latitude,
    longitude,
    offset,
    limit: '20',
    'extras[]': 'activities',
    keyword: '',
    restaurant_category_id,
    'restaurant_category_ids[]': restaurant_category_ids,
    order_by,
    'delivery_mode[]': delivery_mode + supportStr
  };
  return request({
    url: '/shopping/restaurants',
    params: data
  });
};
