/**
 * Created by okeskiner on 3.12.2015.
 */
"use strict";

function Gozlemci(Id,Title,Context){
    this.Id = Id;
    this.Title = Title;
    this.Context = Context;
}

Gozlemci.prototype.constructor = Gozlemci;

Gozlemci.prototype.GetContent = function(Id){
    this.Id = Id;
    console.log("Makale Id: " + Id);
};

var obj = new Gozlemci(1,"deneme","içerik bekleniyor");
obj.GetContent(1);