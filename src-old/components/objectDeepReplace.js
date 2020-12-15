export default function objectDeepReplace(obj, map) {
    function walker(obj) {
        for (let key in obj) if (obj.hasOwnProperty(key)) {
            if (key in map) {
                obj[key] = map[key];
            } else if (typeof obj[key] === "object") {
                walker(obj[key]);
            }
        }
    }

    walker(obj);
}
