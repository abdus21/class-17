

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

    if(name.value == '' || roll.value == '' || Student_class.value == '' || Photo.value == '' || bangla.value == '' || english.value == '' || math.value == '' || science.value == '' || social_science.value == '' || religion.value == ''){
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
             <td><button class="btn btn-info btn-sm" onclick="calculat_result(${index})">View</button></td>
             <td><button id="delete" onclick="delet(${index})" class="btn btn-danger btn-sm">Delete</button></td>
      </tr>
        `;
    });
    all_list.innerHTML = dataa;
   
    
};

//const delete_data = document.getElementById('delete');

function delet(index){
    let conf = confirm('Are you sre ?');
    if(conf){
        let resive_data = data_get('result');
        resive_data.splice(index,1)
        datasend('result',resive_data)
        result_show()
    }else{
        return false;
    }

}

const student_moda = document.querySelector('.student-moda');
const samad_modal = document.querySelector('.samad-modal');
const data_show = document.querySelector('.data_show');

student_moda.addEventListener('click', function(e){



});



function calculat_result(index){
    samad_modal.style.display = 'flex';
    samad_modal.nextElementSibling.classList.add('active');

    samad_modal.addEventListener('click', function(e){
        if(e.target == this){
            samad_modal.style.display = 'none';
        }else{
            samad_modal.style.display = 'flex';
        }
    })
    let resive_data = data_get('result');
    //let data = '';
    resive_data.map(data =>{
        data_show.innerHTML = ` 
        <img style="width: 250px; height: auto; text-align: center; border-radius: 4px;" src="${resive_data[index].Photo}" alt="">
                <h2>abdus samad</h2>
                <hr>
                      <table class="table table-striped">
                      <thead>
                          <tr>
                              <th>Subject</th>
                              <th>Marks</th>
                              <th>CGPA</th>
                              <th>Grade</th>
                              <th>CGPA</th>
                              <th>Result</th>
                          </tr>
                      </thead>
                      <tbody>
                      <tr>
                            <td>Bangla</td>
                            <td>${resive_data[index].bangla}</td>
                            <td>${resultin.GpaGradeCal(resive_data[index].bangla).gpa}</td>
                            <td>${resultin.GpaGradeCal(resive_data[index].bangla).grade}</td>
                            <td class="bg-${resultin.fainalResult(resive_data[index].bangla,resive_data[index].english,resive_data[index].math,resive_data[index].science,resive_data[index].social_science,resive_data[index].religion).color}">${resultin.fainalResult(resive_data[index].bangla,resive_data[index].english,resive_data[index].math,resive_data[index].science,resive_data[index].social_science,resive_data[index].religion).fainalCgpa}</td>
                            <td class="bg-${resultin.fainalResult(resive_data[index].bangla,resive_data[index].english,resive_data[index].math,resive_data[index].science,resive_data[index].social_science,resive_data[index].religion).color}">${resultin.fainalResult(resive_data[index].bangla,resive_data[index].english,resive_data[index].math,resive_data[index].science,resive_data[index].social_science,resive_data[index].religion).fainalGrade}</td>
                     </tr>
                        <tr>
                            <td>English</td>
                            <td>${resive_data[index].english}</td>
                            <td>${resultin.GpaGradeCal(resive_data[index].english).gpa}</td>
                            <td>${resultin.GpaGradeCal(resive_data[index].english).grade}</td>
                     </tr>
                        <tr>
                            <td>Math</td>
                            <td>${resive_data[index].math}</td>
                            <td>${resultin.GpaGradeCal(resive_data[index].math).gpa}</td>
                            <td>${resultin.GpaGradeCal(resive_data[index].math).grade}</td>
                     </tr>
                        <tr>
                            <td>science</td>
                            <td>${resive_data[index].science}</td>
                            <td>${resultin.GpaGradeCal(resive_data[index].science).gpa}</td>
                            <td>${resultin.GpaGradeCal(resive_data[index].science).grade}</td>
                     </tr>
                        <tr>
                            <td>social science</td>
                            <td>${resive_data[index].social_science}</td>
                            <td>${resultin.GpaGradeCal(resive_data[index].social_science).gpa}</td>
                            <td>${resultin.GpaGradeCal(resive_data[index].social_science).grade}</td>
                     </tr>
                        <tr>
                            <td>religion</td>
                            <td>${resive_data[index].religion}</td>
                            <td>${resultin.GpaGradeCal(resive_data[index].religion).gpa}</td>
                            <td>${resultin.GpaGradeCal(resive_data[index].religion).grade}</td>
                     </tr>
                     </tbody>
                  </table>   
                    
        `;
    })

    console.log(resive_data[index])


}