({
    block: 'page',
    title: 'form',
    styles: [{ elem: 'css', url: '_index.css' }],
    scripts: [{ elem: 'js', url: '_index.js' }],
    content: [
        {
            block: 'form',
            method: 'GET',
            content: [
                {
                    elem : 'content',
                    content : [
                        {
                            block : 'controls-group',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Simple'
                                },
                                {
                                    block : 'input',
                                    name : 'simple',
                                    mods : { theme : 'islands', size : 'l' }
                                }
                            ]
                        },
                        {
                            block : 'controls-group',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Required'
                                },
                                {
                                    block : 'input',
                                    name : 'required',
                                    mods : { theme : 'islands', size : 'l' },
                                    mix : [
                                        {
                                            block : 'validate',
                                            mods : { required : true }
                                        }
                                    ]

                                }
                            ]
                        },
                        {
                            block : 'controls-group',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Integers'
                                },
                                {
                                    block : 'input',
                                    name: 'integers',
                                    mods : { theme : 'islands', size : 'l' },
                                    mix : [
                                        {
                                            block : 'validate',
                                            mods : { numbers : true }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'controls-group',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Decimal'
                                },
                                {
                                    block : 'input',
                                    name: 'decimal',
                                    mods : { theme : 'islands', size : 'l' },
                                    mix : [
                                        {
                                            block : 'validate',
                                            js : { precision : 7, scale : 3 },
                                            mods : { numbers : true }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'controls-group',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Money'
                                },
                                {
                                    block : 'input',
                                    name : 'money',
                                    mods : { theme : 'islands', size : 'l' },
                                    mix : [
                                        {
                                            block : 'validate',
                                            mods : { money : true }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'controls-group',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Required card'
                                },
                                {
                                    block : 'input',
                                    name : 'requiredCard',
                                    mods : { theme : 'islands', size : 'l' },
                                    mix : [
                                        {
                                            block : 'validate',
                                            mods : { card : true, required : true }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem : 'footer',
                    content : [
                        {
                            block : 'button',
                            mods : { theme : 'islands', size : 'l' , type : 'submit' },
                            text : 'Submit'
                        }
                    ]
                }
            ]
        }
    ]
})
