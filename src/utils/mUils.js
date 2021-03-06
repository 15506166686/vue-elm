/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}

/*
*  防抖函数
* */

export function _debounce(func, delay=300) {
  let timer = null
  return function (...agrs) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this, agrs)
    },delay)
  }
}