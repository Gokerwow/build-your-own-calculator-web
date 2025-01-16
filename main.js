const displayBox = document.getElementById('display');

// console.log(displayBox.value)
function calculate(){
    if(displayBox.value.length > 0 ){
        let pisah = displayBox.value.split('')
        let angka = ""
        let hasil = []
        let akhir = ""
        
        for(let i = 0; i < pisah.length; i++ ){
            if(!isNaN(pisah[i])){
                angka += pisah[i]
            } else {
                hasil.push(parseInt(angka))
                hasil.push(pisah[i])
                angka = ""
            }
        }
        hasil.push(parseInt(angka))

        akhir = hasil[0]
        
        for(i = 1; i < hasil.length; i += 2){
            let operator = hasil[i] 
            let angkaSesudah = hasil [i + 1] 

            if(operator === "*"){
                akhir *= angkaSesudah
            }
            
            if(operator === "/"){
                akhir /= angkaSesudah
            }
            
            if(operator === "-"){
                akhir -= angkaSesudah
            }
            
            if(operator === "+"){
                akhir += angkaSesudah
            }
        }

        if(!isNaN(akhir)){
            displayBox.value = akhir
        }
        else{
            displayBox.value = ""
            alert("MASUKKAN ANGKA")
        }
        
        
        
    }else {
        alert("MASUKKAN ANGKA TERLEBIH DAHULU")
    }
}