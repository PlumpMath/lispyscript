// Generated by LispyScript v0.3.3
var testTemplate = function(one,two,three) {
    return ["1",one,"2",two,"3",three].join('');
};
var lispyscript = function() {
    return [
        ((true === (true === true)) ?
            ("Passed - " + "(true? true)") :
            ("Failed - " + "(true? true)")),
        ((true === (false === false)) ?
            ("Passed - " + "(false? false)") :
            ("Failed - " + "(false? false)")),
        ((true === (false === (true === {}))) ?
            ("Passed - " + "(false? (true? {}))") :
            ("Failed - " + "(false? (true? {}))")),
        ((true === (typeof(undefined) === "undefined")) ?
            ("Passed - " + "(undefined? undefined)") :
            ("Failed - " + "(undefined? undefined)")),
        ((true === (false === (typeof(null) === "undefined"))) ?
            ("Passed - " + "(false? (undefined? null))") :
            ("Failed - " + "(false? (undefined? null))")),
        ((true === (null === null)) ?
            ("Passed - " + "(null? null)") :
            ("Failed - " + "(null? null)")),
        ((true === (false === (undefined === null))) ?
            ("Passed - " + "(false? (null? undefined))") :
            ("Failed - " + "(false? (null? undefined))")),
        ((true === (0 === 0)) ?
            ("Passed - " + "(zero? 0)") :
            ("Failed - " + "(zero? 0)")),
        ((true === (false === (0 === ''))) ?
            ("Passed - " + "(false? (zero? ''))") :
            ("Failed - " + "(false? (zero? ''))")),
        ((true === (typeof(true) === "boolean")) ?
            ("Passed - " + "(boolean? true)") :
            ("Failed - " + "(boolean? true)")),
        ((true === (false === (typeof(0) === "boolean"))) ?
            ("Passed - " + "(false? (boolean? 0))") :
            ("Failed - " + "(false? (boolean? 0))")),
        ((true === (Object.prototype.toString.call(1) === "[object Number]")) ?
            ("Passed - " + "(number? 1)") :
            ("Failed - " + "(number? 1)")),
        ((true === (false === (Object.prototype.toString.call('') === "[object Number]"))) ?
            ("Passed - " + "(false? (number? ''))") :
            ("Failed - " + "(false? (number? ''))")),
        ((true === (Object.prototype.toString.call('') === "[object String]")) ?
            ("Passed - " + "(string? '')") :
            ("Failed - " + "(string? '')")),
        ((true === (Object.prototype.toString.call([]) === "[object Array]")) ?
            ("Passed - " + "(array? []])") :
            ("Failed - " + "(array? []])")),
        ((true === (false === (Object.prototype.toString.call({}) === "[object Array]"))) ?
            ("Passed - " + "(false? (array? {}))") :
            ("Failed - " + "(false? (array? {}))")),
        ((true === (Object.prototype.toString.call({}) === "[object Object]")) ?
            ("Passed - " + "(object? {})") :
            ("Failed - " + "(object? {})")),
        ((true === (false === (Object.prototype.toString.call([]) === "[object Object]"))) ?
            ("Passed - " + "(object? [])") :
            ("Failed - " + "(object? [])")),
        ((true === (false === (Object.prototype.toString.call(null) === "[object Object]"))) ?
            ("Passed - " + "(false? (object? null))") :
            ("Failed - " + "(false? (object? null))")),
        ((true === (10 === (true ?
                (function() {
                    var ret = 10;
                    return ret;
                })() :
                undefined))) ?
            ("Passed - " + "when test") :
            ("Failed - " + "when test")),
        ((true === (10 === ((!false) ?
                (function() {
                    return (function() {
                        var ret = 10;
                        return ret;
                    })();
                })() :
                undefined))) ?
            ("Passed - " + "unless test") :
            ("Failed - " + "unless test")),
        ((true === (-10 === (function() {
                var i = -1;
                return ((i < 0) ?
                    -10 :
                    ((0 === i) ?
                        0 :
                        ((i > 0) ?
                            10 :
                            undefined)));
            })())) ?
            ("Passed - " + "condition test less than") :
            ("Failed - " + "condition test less than")),
        ((true === (10 === (function() {
                var i = 1;
                return ((i < 0) ?
                    -10 :
                    ((0 === i) ?
                        0 :
                        ((i > 0) ?
                            10 :
                            undefined)));
            })())) ?
            ("Passed - " + "condition test greater than") :
            ("Failed - " + "condition test greater than")),
        ((true === (0 === (function() {
                var i = 0;
                return ((i < 0) ?
                    -10 :
                    ((0 === i) ?
                        0 :
                        ((i > 0) ?
                            10 :
                            undefined)));
            })())) ?
            ("Passed - " + "condition test equal to") :
            ("Failed - " + "condition test equal to")),
        ((true === (10 === (function() {
                var i = Infinity;
                return ((i < 0) ?
                    -10 :
                    ((0 === i) ?
                        0 :
                        (true ?
                            10 :
                            undefined)));
            })())) ?
            ("Passed - " + "condition test default") :
            ("Failed - " + "condition test default")),
        ((true === (10 === (function() {
                var recur = null,
                    ___result = !undefined,
                    ___nextArgs = null,
                    ___f = function(i) {
                        return ((i === 10) ?
                            i :
                            recur(++i));
                    };
                recur = function() {
                    ___nextArgs = arguments;
                    return ((___result === undefined) ?
                        undefined :
                        (function() {
                            ___result = undefined;
                            while(___result===undefined) ___result=___f.apply(this,___nextArgs);
                            return ___result;
                        })());
                };
                return recur(1);
            })())) ?
            ("Passed - " + "loop recur test") :
            ("Failed - " + "loop recur test")),
        ((true === (10 === (function() {
                var ret = 0;
                ([
                    1,
                    2,
                    3,
                    4
                ]).forEach(function(val) {
                    ret = (ret + val);
                });
                return ret;
            })())) ?
            ("Passed - " + "each test") :
            ("Failed - " + "each test")),
        ((true === (10 === (function() {
                var ret = 0;
                (function(o,f,s) {
                    var _k = Object.keys(o);
                    return (_k).forEach(function(elem) {
                        return f.call(s,o[elem],elem,o);
                    });
                })({a: 1, b: 2, c: 3, d: 4},function(val) {
                    ret = (ret + val);
                });
                return ret;
            })())) ?
            ("Passed - " + "eachKey test") :
            ("Failed - " + "eachKey test")),
        ((true === (10 === ([1, 2, 3, 4]).reduce(function(accum,val) {
                return (accum + val);
            },0))) ?
            ("Passed - " + "reduce test with init") :
            ("Failed - " + "reduce test with init")),
        ((true === (10 === ([1, 2, 3, 4]).reduce(function(accum,val) {
                return (accum + val);
            }))) ?
            ("Passed - " + "reduce test without init") :
            ("Failed - " + "reduce test without init")),
        ((true === (20 === (([1, 2, 3, 4]).map(function(val) {
                return (val * 2);
            })).reduce(function(accum,val) {
                return (accum + val);
            },0))) ?
            ("Passed - " + "map test") :
            ("Failed - " + "map test")),
        ((true === ("112233" === testTemplate(1,2,3))) ?
            ("Passed - " + "template test") :
            ("Failed - " + "template test")),
        ((true === ("112233" === (function() {
                var ___ret = "";
                (function(o,f,s) {
                    var _k = Object.keys(o);
                    return (_k).forEach(function(elem) {
                        return f.call(s,o[elem],elem,o);
                    });
                })({"1":1,"2":2,"3":3},function(value,key) {
                    ___ret = (___ret + [key,value].join(''));
                });
                return ___ret;
            })())) ?
            ("Passed - " + "template repeat key test") :
            ("Failed - " + "template repeat key test")),
        ((true === (10 === (function() {
            try {
                var i = 10;
                return i;

            } catch (e) {
            return (function(err) {
            })(e);
            }
            })())) ?
            ("Passed - " + "try catch test - try block") :
            ("Failed - " + "try catch test - try block")),
        ((true === (10 === (function() {
            try {
                (function(){throw 10;})();

            } catch (e) {
            return (function(err) {
                return err;
            })(e);
            }
            })())) ?
            ("Passed - " + "try catch test - catch block") :
            ("Failed - " + "try catch test - catch block")),
        ((true === (3 === (function(___monad) {
                var mBind = ___monad.mBind,
                    mResult = ___monad.mResult,
                    mZero = ___monad.mZero,
                    mPlus = ___monad.mPlus;
                var ____mResult = function(___arg) {
                    return (((typeof(___arg) === "undefined") && (!(typeof(mZero) === "undefined"))) ?
                        mZero :
                        mResult(___arg));
                };
                return mBind(1,function(a) {
                    return mBind((a * 2),function(b) {
                        return (function() {
                            return ____mResult((a + b));
                        })();
                    });
                });
            })({
                mBind: function(mv,mf) {
                    return mf(mv);
                },
                mResult: function(v) {
                    return v;
                }
            }))) ?
            ("Passed - " + "Identity Monad Test") :
            ("Failed - " + "Identity Monad Test")),
        ((true === (3 === (function(___monad) {
                var mBind = ___monad.mBind,
                    mResult = ___monad.mResult,
                    mZero = ___monad.mZero,
                    mPlus = ___monad.mPlus;
                var ____mResult = function(___arg) {
                    return (((typeof(___arg) === "undefined") && (!(typeof(mZero) === "undefined"))) ?
                        mZero :
                        mResult(___arg));
                };
                return mBind(1,function(a) {
                    return mBind((a * 2),function(b) {
                        return (function() {
                            return ____mResult((a + b));
                        })();
                    });
                });
            })({
                mBind: function(mv,mf) {
                    return ((mv === null) ?
                        null :
                        mf(mv));
                },
                mResult: function(v) {
                    return v;
                },
                mZero: null
            }))) ?
            ("Passed - " + "maybe Monad Test") :
            ("Failed - " + "maybe Monad Test")),
        ((true === (null === (function(___monad) {
                var mBind = ___monad.mBind,
                    mResult = ___monad.mResult,
                    mZero = ___monad.mZero,
                    mPlus = ___monad.mPlus;
                var ____mResult = function(___arg) {
                    return (((typeof(___arg) === "undefined") && (!(typeof(mZero) === "undefined"))) ?
                        mZero :
                        mResult(___arg));
                };
                return mBind(null,function(a) {
                    return mBind((a * 2),function(b) {
                        return (function() {
                            return ____mResult((a + b));
                        })();
                    });
                });
            })({
                mBind: function(mv,mf) {
                    return ((mv === null) ?
                        null :
                        mf(mv));
                },
                mResult: function(v) {
                    return v;
                },
                mZero: null
            }))) ?
            ("Passed - " + "maybe Monad null Test") :
            ("Failed - " + "maybe Monad null Test")),
        ((true === (54 === ((function(___monad) {
                var mBind = ___monad.mBind,
                    mResult = ___monad.mResult,
                    mZero = ___monad.mZero,
                    mPlus = ___monad.mPlus;
                var ____mResult = function(___arg) {
                    return (((typeof(___arg) === "undefined") && (!(typeof(mZero) === "undefined"))) ?
                        mZero :
                        mResult(___arg));
                };
                return mBind([1,2,3],function(a) {
                    return mBind([3,4,5],function(b) {
                        return (function() {
                            return ____mResult((a + b));
                        })();
                    });
                });
            })({
                mBind: function(mv,mf) {
                    return ((mv).map(mf)).reduce(function(accum,val) {
                        return accum.concat(val);
                    },[]);
                },
                mResult: function(v) {
                    return [v];
                },
                mZero: [],
                mPlus: function() {
                    return (Array.prototype.slice.call(arguments)).reduce(function(accum,val) {
                        return accum.concat(val);
                    },[]);
                }
            })).reduce(function(accum,val) {
                return (accum + val);
            },0))) ?
            ("Passed - " + "arrayMonad test") :
            ("Failed - " + "arrayMonad test")),
        ((true === (32 === ((function(___monad) {
                var mBind = ___monad.mBind,
                    mResult = ___monad.mResult,
                    mZero = ___monad.mZero,
                    mPlus = ___monad.mPlus;
                var ____mResult = function(___arg) {
                    return (((typeof(___arg) === "undefined") && (!(typeof(mZero) === "undefined"))) ?
                        mZero :
                        mResult(___arg));
                };
                return mBind([1,2,3],function(a) {
                    return mBind([3,4,5],function(b) {
                        return (function() {
                            return ____mResult((((a + b) <= 6) ?
                                (function() {
                                    return (a + b);
                                })() :
                                undefined));
                        })();
                    });
                });
            })({
                mBind: function(mv,mf) {
                    return ((mv).map(mf)).reduce(function(accum,val) {
                        return accum.concat(val);
                    },[]);
                },
                mResult: function(v) {
                    return [v];
                },
                mZero: [],
                mPlus: function() {
                    return (Array.prototype.slice.call(arguments)).reduce(function(accum,val) {
                        return accum.concat(val);
                    },[]);
                }
            })).reduce(function(accum,val) {
                return (accum + val);
            },0))) ?
            ("Passed - " + "arrayMonad when test") :
            ("Failed - " + "arrayMonad when test")),
        ((true === (6 === ((function(___monad) {
                var mBind = ___monad.mBind,
                    mResult = ___monad.mResult,
                    mZero = ___monad.mZero,
                    mPlus = ___monad.mPlus;
                var ____mResult = function(___arg) {
                    return (((typeof(___arg) === "undefined") && (!(typeof(mZero) === "undefined"))) ?
                        mZero :
                        mResult(___arg));
                };
                return mBind([1,2,0,null,3],function(a) {
                    return (function() {
                        return ____mResult((a ?
                            (function() {
                                return a;
                            })() :
                            undefined));
                    })();
                });
            })({
                mBind: function(mv,mf) {
                    return ((mv).map(mf)).reduce(function(accum,val) {
                        return accum.concat(val);
                    },[]);
                },
                mResult: function(v) {
                    return [v];
                },
                mZero: [],
                mPlus: function() {
                    return (Array.prototype.slice.call(arguments)).reduce(function(accum,val) {
                        return accum.concat(val);
                    },[]);
                }
            })).reduce(function(accum,val) {
                return (accum + val);
            },0))) ?
            ("Passed - " + "arrayMonad when null values test") :
            ("Failed - " + "arrayMonad when null values test"))
    ];
};
var browserTest = function() {
    var el = document.getElementById("testresult");
    return (el.outerHTML ?
        el.outerHTML = ["<pre>",(function(groupname,desc) {
            var start = new Date(),
                tests = groupname(),
                passed = 0,
                failed = 0;
            (tests).forEach(function(elem) {
                return (elem.match(/^Passed/) ?
                    ++passed :
                    ++failed);
            });
            return [["\n",desc,"\n",start,"\n\n"].join(''),(tests).reduce(function(___memo,elem,index) {
                return (___memo + [elem,"\n"].join(''));
            },""),"\nTotal tests ",tests.length,"\nPassed ",passed,"\nFailed ",failed,"\nDuration ",(new Date() - start),"ms\n"].join('');
        })(lispyscript,"LispyScript Testing"),"</pre>"].join('') :
        el.innerHTML = (function(groupname,desc) {
            var start = new Date(),
                tests = groupname(),
                passed = 0,
                failed = 0;
            (tests).forEach(function(elem) {
                return (elem.match(/^Passed/) ?
                    ++passed :
                    ++failed);
            });
            return [["\n",desc,"\n",start,"\n\n"].join(''),(tests).reduce(function(___memo,elem,index) {
                return (___memo + [elem,"\n"].join(''));
            },""),"\nTotal tests ",tests.length,"\nPassed ",passed,"\nFailed ",failed,"\nDuration ",(new Date() - start),"ms\n"].join('');
        })(lispyscript,"LispyScript Testing"));
};
((typeof(window) === "undefined") ?
    console.log((function(groupname,desc) {
        var start = new Date(),
            tests = groupname(),
            passed = 0,
            failed = 0;
        (tests).forEach(function(elem) {
            return (elem.match(/^Passed/) ?
                ++passed :
                ++failed);
        });
        return [["\n",desc,"\n",start,"\n\n"].join(''),(tests).reduce(function(___memo,elem,index) {
            return (___memo + [elem,"\n"].join(''));
        },""),"\nTotal tests ",tests.length,"\nPassed ",passed,"\nFailed ",failed,"\nDuration ",(new Date() - start),"ms\n"].join('');
    })(lispyscript,"LispyScript Testing")) :
    window.onload = browserTest);
