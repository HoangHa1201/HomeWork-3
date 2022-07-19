// XUẤT OUTPUT RA POWER SHELL
var jsonFile = require('./db.json');

// Xử lý input
var data = [];
jsonFile.forEach(function (item, index) {
    data[index] = {
        maSV: item.maSV,
        tenSV: item.tenSV,
        tuoi: item.tuoi,
        gioiTinh: item.gioiTinh,
        ngaySinh: item.ngaySinh,
        diemToan: item.diemToan,
        diemLy: item.diemLy,
        diemHoa: item.diemHoa,
        diemAnh: item.diemAnh,
        lop: item.lop,
        diemTB: (item.diemToan + item.diemLy + item.diemHoa + item.diemAnh) / 4
    }
})

// Xử lý output 1,3,4
var arrDiemTB = [];
var arrSvQm = []
var listDiemChu = [];
class Person {

    constructor(data1) {
        this.maSV = data1.maSV;
        this.tenSV = data1.tenSV;
        this.lop = data1.lop;
        this.diemToan = data1.diemToan;
        this.diemLy = data1.diemLy;
        this.diemHoa = data1.diemHoa;
        this.diemAnh = data1.diemAnh;
        this.diemTB = data1.diemTB;
    }
    diemTrungBinh() {
        return {
            maSV: this.maSV,
            diemTB: this.diemTB
        };
    }
    svQuaMon(){
        if(this.diemToan >= 4 && this.diemLy >= 4 && this.diemHoa >= 4 && this.diemAnh >= 4){
            return{
                maSV:this.maSV,
                ketqua: " qua mon",
            }
        }
    }
    diemTbChu(){
        var diemSo = [this.diemToan, this.diemLy, this.diemHoa, this.diemAnh]
        var diemChu = []
        for(var i = 0; i<diemSo.length;i++){
            var stack = '';
            if(diemSo[i] >= 4){
                if(diemSo[i] > 4.9){
                    if(diemSo[i] >5.4){
                        if(diemSo[i] > 6.9){
                            if(diemSo[i] > 8.4){
                                stack = 'A'
                            }else{
                                stack = 'B'
                            }
                        }else{
                            stack = 'C'
                        }
                    }else{
                        stack = 'D+'
                    }
                }else{
                    stack = 'D'
                }
            }else{
                stack = 'F'
            }
            diemChu.push(stack)
        }
        return{
            maSv: this.maSV,
            diemToanChu: diemChu[0],
            diemLyChu: diemChu[1],
            diemHoaChu: diemChu[2],
            diemAnhChu: diemChu[3],
        }
    }

}
data.forEach(function (item) {
    const Shady = new Person(item);
    arrDiemTB.push(Shady.diemTrungBinh());
    if(Shady.svQuaMon() !== undefined){
        arrSvQm.push(Shady.svQuaMon())
    }
    listDiemChu.push(Shady.diemTbChu())
})
// Điểm trung bình các môn học của từng sinh viên
console.log('Điểm trung bình các môn học của từng sinh viên')
console.log(arrDiemTB);
console.log(" ")

// Sinh viên qua môn với điểm các môn ≥ 4.0 (thang điểm 10):
console.log('Sinh viên qua môn với điểm các môn ≥ 4.0 (thang điểm 10)')
console.log(arrSvQm);
console.log(" ")

// Tính điểm chữ (thang điểm 4) cho sinh viên:
console.log('Tính điểm chữ (thang điểm 4) cho sinh viên: ')
console.log(listDiemChu)
console.log(" ")


// Sinh viên có điểm trung bình cao, thấp nhất mỗi lớp:
var arrMaxMin = []
function dataLop(data) {
    // Xử lý dữ liệu lớp học
    var lop = [];
    data.forEach(function (item) {
        lop.push(item.lop)
    })
    // xóa các lớp giống nhau
    for (let i = 0; i < lop.length; i++) {
        for (let j = i + 1; j < lop.length; j++) {
            if (lop[i] == lop[j]) {
                lop.splice(j, 1);
            }
        }
    }
    for(let i = 0; i<lop.length; i++){
        var max = 0;
        var min = 11;
        var MaSvMax = '';
        var MaSvMin = '';
        for(let j = 0; j<data.length; j++){
            if(data[j].lop === lop[i]){
                if(data[j].diemTB >= max){
                    max = data[j].diemTB;
                    MaSvMax = data[j].maSV
                }
                if(data[j].diemTB <= min){
                    min = data[j].diemTB;
                    MaSvMin = data[j].maSV;
                }
            }
        }
        arrMaxMin.push ({
            lop: lop[i],
            diemTbMax: max,
            maSvMax: MaSvMax,
            diemTbMin: min,
            maSvMin: MaSvMin,
        })
    }
}
dataLop(data);
console.log('Sinh viên có điểm trung bình cao, thấp nhất mỗi lớp:')
console.log(arrMaxMin)
console.log(' ')
