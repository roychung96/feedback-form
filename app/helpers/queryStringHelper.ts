export function queryStringHelper(passed_params){
    var url = '';
    if(passed_params){
        // Loop the property names of `el`, creating a new object
        // with the ones whose values aren't `null`.
        // `reduce` is commonly used for doing this:
        const params = Object.keys(passed_params).reduce((newObj, key) => {
            const value = passed_params[key];
            if (value !== null) {
            newObj[key] = value;
            }
            return newObj;
        }, {});
        
        url = Object.keys(params).map(function(k) {
            if(params[k] != null){
                return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
            }else{
                return null;
            }
            
        }).join('&');
    }
    return url;
}
