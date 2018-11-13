var app = new Vue ({
    el:'#app',
    data: {
        show: false,
        message: "hello world",
        message2: "hello vue",
        int1: 5,
        int2: 5,
        hasil: null,
        meter: 0,
        kilometer: 0
    },
    computed: {
        penjumlahan: function (){
            return this.int1 + this.int2;
        }
    },
    methods: {
        prosesPengurangan: function (){
            return this.hasil = this.int2 - this.int1;
        }
    },
    watch:{
        meter: function (val){
            this.meter = val;
            this.kilometer = val/1000;
        },
        kilometer: function (val){
            this.meter = val*1000;
            this.kilometer = val;
        }
    }
})

var app = new Vue ({
    el: '#app2',
    data: {
        message: '',
        message2: '',
        testRadio: '',
        testCheckbox: [],
        testDropdown: []
    }
})
