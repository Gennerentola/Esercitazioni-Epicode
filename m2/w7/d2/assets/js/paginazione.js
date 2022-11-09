var printBox = document.getElementById("itemBox");
var btnZone = document.getElementById("btnBox");

class Pagination {

    constructor(_items = [], _pageSize = 10) {

        this.items = _items;
        this.pageSize = _pageSize;
        this.numOfPages = Math.ceil(this.items.length/this.pageSize);
        this.itemPerPage = this.items.slice(0, (this.pageSize - 1));
        this.currentPage = 1;

    }

    next() {

        if (this.page < this.numOfPages) {
        this.currentPage++;
        }

        this.getView();
    }

    prev() {

        if (this.page > 1) {
        this.currentPage--;
        } else {
            this.currentPage = 1;
        }
        this.getView();
    }

    getView() {
        let startingIndex = this.pageSize * (this.currentPage-1);
        let endingIndexNotIncluded = startingIndex + this.pageSize;

        if (endingIndexNotIncluded >= this.items.length) {
            endingIndexNotIncluded = this.items.length;
        }

        for (let i = startingIndex; i<endingIndexNotIncluded; i++) {
            this.addRow(this.items[i])
        }
    }

    addRow() {
        let tr = document.createElement("tr");
        let tdNum = document.createElement("td");
        tdNum.innerHTML = element.num;
        let tdName = document.createElement("td");
        tdName.innerHTML = element.name;
        let tdSurname = document.createElement("td");
        tdSurname.innerHTML = element.surname;

        tr.append(tdNum, tdName, tdSurname);

        printBox.appendChild(tr);
    }
}