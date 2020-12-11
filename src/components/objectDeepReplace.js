export default function objectDeepReplace(obj, map) {
    function walker(obj) {
        console.log(map);
        for (let key in obj) if (obj.hasOwnProperty(key)) {
            console.log(key, key in map);
            if (key in map) {
                console.log("key match", key);
                obj[key] = map[key];
            } else if (typeof obj[key] === "object") {
                walker(obj[key]);
            }
        }
    }

    walker(obj);
    console.log("after walking: ", obj);
}
