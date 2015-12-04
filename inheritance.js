/**
 * Created by okeskiner on 3.12.2015.
 */
"use strict"
function Ana(isim){
    this.isim = isim;
}

Ana.prototype.yemekYap = function(){
    console.log(this.isim + " yemek yapıyor...");
}


function Cocuk(isim){
    Ana.call(this,isim);
}

Cocuk.prototype = new Ana();
var ana = new Ana("anne");
ana.yemekYap();
var obj = new Cocuk("annenin kızı");
obj.yemekYap();