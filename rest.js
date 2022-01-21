'use strict';

exports.ok = function(values, res) {
    var data = {
        'status':200,
        'values':values
    };

    // console.log(values);
     res.json(data);
     res.end();
};

//Response Nested
exports.oknested = function(values, res) {
    //Akumulasi
    const hasil = values.reduce((akumulasikan, item)=> {
        //Tentukan key group
        if(akumulasikan[item.nama]){
            //Buatlah variabel grup nama mahasiswa
            const group = akumulasikan[item.nama];
            //Cek jika isi array adalah matakuliah
            if(Array.isArray(group.matakuliah)){
                //tambahkan value ke dalam group matakuliah
                group.matakuliah.push(item.matakuliah);
            }else{
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        }else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };

    res.json(data);
    res.end();
}

