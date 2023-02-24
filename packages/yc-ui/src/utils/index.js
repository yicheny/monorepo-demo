import _ from 'lodash'

export function createDictExe(dict, defaultValue) {
    return (key) => {
        const res = dict[key]
        return _.isUndefined(res) ? defaultValue : res
    }
}