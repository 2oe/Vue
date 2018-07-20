class Utils {
    format(opt) {
        let temp = "";
        for (let key in opt) {
            let val = opt[key] !== undefined ? opt[key] : "";
            temp += `&${key}=${encodeURI(val)}`
        }
        return temp ? temp.substring(1) : "";
    }
}
const utils = new Utils();
export default utils;