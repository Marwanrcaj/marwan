let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
/*let mood='create'
let temp;
function getTotal() {
    if (price.value != "") {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = "#040"; // أخضر عند الحساب الصحيح
    } else {
        total.innerHTML = "";
        total.style.background = "#f43f5e"; // أحمر عند وجود خطأ
    }
}

// تحميل البيانات من localStorage إذا كانت موجودة
let datapro;
if (localStorage.product != null ) {
    datapro = JSON.parse(localStorage.product);
} else {
    datapro = [];
}

// عند الضغط على زر الإرسال
submit.onclick = function() {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    };
    if(mood==='create'){
         if(newPro.count>1){
        for(i=0;i<newPro.count;i++)
            datapro.push(newPro);
    }else{
        datapro.push(newPro);
    }
}else{
    datapro[temp]=newPro
    mood='creat'
    submit.innerHTML='create'
    count.style.display='block'
}
    
    localStorage.setItem('product', JSON.stringify(datapro));

    clearData();
    showData();
};

// مسح الحقول بعد الإضافة
function clearData() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

// عرض البيانات في جدول
function showData() {
    getTotal()
    let table = ''; // تهيئة المتغير table ليحتوي على جدول فارغ
    
    for (let i = 0; i < datapro.length; i++) {
        table += 
         `   <tr>
                <td>${i + 1}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button class="update" onclick="updateData(${i})">تحديث</button></td>
                <td><button class="delete" onclick="deleteData(${i})">حذف</button></td>
            </tr>`
        ;
    }

    // تحديث محتوى tbody في HTML ليعرض البيانات
    document.getElementById('tbody').innerHTML = table;
    let deletalle =document.getElementById("deletalle")
    if(datapro.length>0){
        deletalle.innerHTML=` <td><button onclick="deletale()" >deletalle ${datapro.length}</button></td>|`
    }else{
        deletalle.innerHTML=""
    }
}
 
function deleteData(i){
    datapro.splice(i,1)
    localStorage.product=JSON.stringify(datapro)
    showData()
}
function deletale() {

    localStorage.clear();
    datapro.splice(0);

    showData();
}
function updateData(i){
    title.value=datapro[i].title;
    price.value=datapro[i].price;
    taxes.value=datapro[i].taxes;
    discount.value=datapro[i].discount
    ads.value=datapro[i].ads;
    category.value=datapro[i].category;
    getTotal()
    count.style.display='none'
    submit.innerHTML='update'
    mood='upedet'
    temp=i;
    scroll({
        top:0,
        behavior:'smooth',
    })
}


let sherchemood='titel'



function getcherche(id){
if(id=='searchTitle'){
    sherchemood='titel'
}else{
     sherchemood='categore'
}
    console.log(sherchemood);
    
}
*/
