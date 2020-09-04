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