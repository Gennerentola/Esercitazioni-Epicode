var printBox = document.getElementById("itemBox");
var btnZone = document.getElementById("btnBox");

class Paginate {

    constructor(_items = [], _pageSize = 10) {

        this.items = _items;
        this.pageSize = _pageSize;
        this.numOfPages = Math.ceil(this.items.length/this.pageSize);
        this.itemPerPage = this.items.slice(0, (this.pageSize - 1));
        this.currentPage = 1;

    }

    format() {
        


    }

}