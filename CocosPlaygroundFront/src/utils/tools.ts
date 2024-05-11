/**
 * 下载文件
 * @param url  文件的URL地址
 * @param filename  下载文件的名称
 */
export async function downloadFile(url: string, filename: string) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);

        // 创建一个隐藏的链接元素
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename || ''; // 设置下载文件的名称，如果不提供则使用默认名称

        // 将链接元素添加到文档中，以便可以触发点击事件
        document.body.appendChild(link);

        // 模拟点击链接
        link.click();

        // 移除链接元素
        document.body.removeChild(link);

        // 释放内存
        URL.revokeObjectURL(downloadUrl);
    } catch (error) {
        console.error('下载文件时出错:', error);
    }
}

/**
 * 深度克隆对象或数组
 * @param obj 
 * @returns 
 */
export function deepClone<T extends object>(obj: T): T {
    // 检查传入的参数是否为对象或数组
    if (typeof obj !== 'object' || obj === null) {
        return obj as any;
    }

    // 创建一个容器来存储克隆的对象或数组
    let clone: any = Array.isArray(obj) ? [] : {};

    // 遍历对象的键
    for (let key in obj) {
        // 确保属性是对象自身的，而不是原型链上的
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // 递归调用 deepClone 来处理嵌套对象或数组
            clone[key] = deepClone(obj[key] as any);
        }
    }

    return clone as T;
}


/**
 * 递归filter
 */
export function deepFilter<T>(arr: T[], callback: (item: T) => boolean): T[] {
    arr = deepClone(arr);
    return arr.filter((item) => {
        if ((item as any).children) {
            (item as any).children = deepFilter((item as any).children, callback);
            return (item as any).children.length > 0;
        } else {
            return callback(item);
        }
        // if (callback(item)) {
        //     return true;
        // } else if ((item as any).children) {
        //     (item as any).children = deepFilter((item as any).children, callback);
        //     return (item as any).children.length > 0;
        // } else {
        //     return false;
        // }
    });
}