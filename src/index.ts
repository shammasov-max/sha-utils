export * from './array'
export * from './time/date'
export * from './environment'
export * from './debug/estimate'
export * from './maps'
export * from './time/async'
export * from './time/getYearsFromSomeToCurrent'
import * as R from 'ramda'
export *  from './debug/index'
export * from './random'
import {default as capitalize} from './capitalize'
import {default as filterObj} from './filterObj'
import emailValidation from './validation/email'

import getTimer from './time/getTimer'
import { exit } from 'process'

export {capitalize, filterObj}
export {validation} from './validation/validation'
export {emailValidation, getTimer}

export const swap = R.curry((index1, index2, list) => {
    if (index1 < 0 || index2 < 0 || index1 > list.length - 1 || index2 > list.length - 1) {
        return list // download out of bound
    }
    const value1 = list[index1]
    const value2 = list[index2]
    return R.pipe(
        R.set(R.lensIndex(index1), value2),
        R.set(R.lensIndex(index2), value1)
    )(list)
})


export * from './typings'