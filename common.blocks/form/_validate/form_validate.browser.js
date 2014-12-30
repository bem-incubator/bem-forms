/**
 * @module form
 */

modules.define(
    'form',
    ['jquery'],
    function (provide, $, Form) {

        provide(Form.decl({ modName : 'validate', modVal : true }, {

            onSetMod : {
                'js' : {
                    'inited' : function () {
                        var _this = this;

                        _this._validates = _this.findBlocksInside('validate');
                        _this._fields = _this.elem('field');

                        _this.bindTo('submit', function(e) {
                            _this._submit(e);
                        });

                        $.each(_this._validates, function(i, validator) {
                            validator.on('changeState', function() {
                                _this.run();
                            });
                        });

                    }
                }
            },

            run : function() {
                var _this = this;

                for(var i = 0; i < _this._validates.length - 1; i++) {
                    if(!_this._validates[i].getValid()) {
                        _this.delMod('valid');
                        _this.setMod('invalid');
                        _this._validates[i].run();
                        return false;
                    }
                }

                _this.setMod('valid');
                return true;
            },

            _submit : function(e) {
                e.preventDefault();
                this.run();
            }

        },
        {
            live : false
        }));

    }
);
