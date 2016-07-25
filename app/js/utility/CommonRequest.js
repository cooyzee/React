import Refetch from 'refetch';
import {Modal} from 'rctui';

const fetch = Refetch.create({
    options: {
        headers: {Accept: 'application/json'},
        // dataType: 'json',
        timeout : 20000
    },
    promise: (f) => f
        .then((res, xhr) => {
            if (res.success) {
                return res;
            } else {
                if(res.code == 'J000997' ){
                    Modal.alert(res.description);
                }else{
                    Modal.alert('系统异常，请联系管理员');
                }
                // 返回 new Error，cache将会忽略这个错误数据
                return new Error(res.msg);
            }
        })
        .catch((err, res, xhr) => {
            if (xhr.status == 0) {
                Modal.alert('请求服务器超时，请重试');
            }
            if (xhr.status == 401) {
                Modal.alert('登录状态已过期，请重新登录');
                window.location.href = '/login';
            }
            if (xhr.status == 404) {
                Modal.alert('未找到服务，请联系管理员');
            }
            if (xhr.status == 1000) {
                Modal.alert('您的账号已经在别处登录，请重新登录');
            }
        })
});

export default fetch
