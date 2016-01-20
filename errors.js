"use strict";

module.exports = {
    "bookNotExists" : {
        code: 1,
        message : "Khong tim thay cuon sach",
        description: "Id cua ban khong phu hop"
    },
    "routeNotExists" : {
        code: 2,
        message : "Khong tim route",
        description: "Route cung cap sai"
    },
    reviewNotExists : {
        code: 3,
        message : "Khong tim thay review",
        description: "Sai review id"
    },
    notEnoughInformation : {
        code : 4,
        message : "Can day du thong tin cac truong",
        description: "Thieu du lieu"
    },
    limitRate :{
        code : 5,
        message: "Qua nhieu request",
        description: "So luong request vuot qua 100"
    }
}