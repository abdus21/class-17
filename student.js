

const student_form = document.querySelector('#student_form');
const alert_h4 = document.querySelector('#alert');
const all_list = document.querySelector('.all_list');

student_form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = student_form.querySelector('input[placeholder="Student Name"]');
    let roll = student_form.querySelector('input[placeholder="Roll Numder"]');
    let Student_class = student_form.querySelector('input[placeholder="Class"]');
    let Photo = student_form.querySelector('input[placeholder="Photo"]');
    let gender = student_form.querySelector('input[name="gender"]:checked');
    let bangla = student_form.querySelector('input[placeholder="Bangla"');
    let english = student_form.querySelector('input[placeholder="English"');
    let math = student_form.querySelector('input[placeholder="Math"');
    let science = student_form.querySelector('input[placeholder="Science"');
    let social_science = student_form.querySelector('input[placeholder="Social Science"');
    let religion = student_form.querySelector('input[placeholder="Religion"');

    if(name.value == '' || roll.value == '' || Student_class.value == '' || Photo.value == '' || gender.value == '' ||bangla.value == '' || english.value == '' || math.value == '' || science.value == '' || social_science.value == '' || religion.value == ''){
        alert_h4.innerHTML = `<p class="bg-danger p-3">all field are required</p>`
    }else{
        alert_h4.innerHTML = `<p class="bg-success p-3">Data stable!</p>`
    }

    let student_arr = [];
    if(data_get('result')){
        student_arr = data_get('result');
    }else{
        student_arr = [];
    };

    student_arr.push({
        name : name.value,
        roll : roll.value,
        Student_class : Student_class.value,
        Photo : Photo.value,
        gender : gender.value,
        bangla : bangla.value,
        english : english.value,
        math : math.value,
        science : science.value,
        social_science : social_science.value,
        religion : religion.value,
    })

    datasend('result',student_arr);
    console.log(data_get('result'))
    result_show();
    student_form.querySelector('input[placeholder="Student Name"]').value = '';
    student_form.querySelector('input[placeholder="Roll Numder"]').value = '';
    student_form.querySelector('input[placeholder="Class"]').value = '';
    student_form.querySelector('input[placeholder="Photo"]').value = '';
    student_form.querySelector('input[name="gender"]:checked').value = '';
    student_form.querySelector('input[placeholder="Bangla"').value = '';
    student_form.querySelector('input[placeholder="English"').value = '';
    student_form.querySelector('input[placeholder="Math"').value = '';
    student_form.querySelector('input[placeholder="Science"').value = '';
    student_form.querySelector('input[placeholder="Social Science"').value = '';
    student_form.querySelector('input[placeholder="Religion"').value = '';

});

result_show()
function result_show(){

    let resive_data = data_get('result');
    let dataa = '';
    resive_data.map((data,index) =>{
        dataa += `
       <tr>
             <td>${index + 1}</td>
             <td>${data.name}</td>
             <td>${data.roll}</td>
             <td>${data.Student_class}</td>
             <td>${data.gender}</td>
             <td>A</td>
             <td>4.6</td>
             <td><img style="width:50px;height:50px;object-fit:cover" src="${data.Photo}" alt=""></td>
             <td><button class="btn btn-info btn-sm">View</button></td>
             <td><button class="btn btn-danger btn-sm">Delete</button></td>
      </tr>
        `;
    });
    all_list.innerHTML = dataa
}