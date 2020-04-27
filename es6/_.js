'use strict';

function  _filter(users, predi) { // 응용형 함수.
    var new_list = [];
    _each(list, function(val){
        if (predi(val)) {
            new_list.push(val);
        }
    });
    return new_list;
}

function _map(list, mapper) {
    var new_list = [];
    _each(list, function(val) {
        new_list.push(mapper(val));
    });
    return new_list;
}

function _each(list, iter) {
    for (var i=0; i < list.length; i++) {
        iter(list[i]);
    }
    return list;
}

function _curry(fn) {
    return function(a) {
        return function(b) {
            return arguments.length ==2 ? fn(a,b) : function(b) {return fn(a,b0);}
        }
    }
}

export default {_filter, _map, _each, _curry};