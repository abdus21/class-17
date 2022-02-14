

function data_get(key){
    let get = localStorage.getItem(key);
    return JSON.parse(get) ? JSON.parse(get) : [];
}
function datasend(key,data){
   let json = JSON.stringify(data);
   return localStorage.setItem(key,json)
}

// 1 GPA,GREADE,CGPA.. WITH CONSTRUCTOR CUNCTION



function Result(){

    // GPA calculator
    this.GpaGradeCal = function(marks){
          let gpa;
          let grade;
          if( marks >= 0 && marks <33 ){
              gpa = 0.0;
              grade = 'F'
          }else if( marks >= 33 && marks <40 ){
              gpa = 1.0;
              grade = 'D';
          }else if( marks >= 40 && marks <50 ){
            gpa = 2.0;
            grade = 'C';
        }else if( marks >= 50 && marks <60 ){
            gpa = 3.0;
            grade = 'B';
        }else if( marks >= 60 && marks <70 ){
            gpa = 3.5;
            grade = 'A-';
        }else if( marks >= 70 && marks <80 ){
            gpa = 4.0;
            grade = 'A';
        }else if( marks >= 80 && marks <100 ){
            gpa = 5.0;
            grade = 'A+';
        }


        return {
            gpa : gpa,
            grade : grade,
        }
    }

    // Fainal Result
    this.fainalResult = function( bn, en, math, rel, ss,cs ){
        let cgpa;
        let fainalGrade;
        let color;

        let totalCgpa = this.GpaGradeCal(bn).gpa + this.GpaGradeCal(en).gpa + this.GpaGradeCal(math).gpa + this.GpaGradeCal(rel).gpa + this.GpaGradeCal(ss).gpa + this.GpaGradeCal(cs).gpa;
          
        cgpa = totalCgpa / 6;

        if( bn <33 || en <33 || math <33 || rel <33 || ss <33 || cs <33){
            fainalGrade = 'F';
            color = 'danger'
        }else if( cgpa >= 0 && cgpa < 1 ){
            fainalGrade = 'F'
            color = 'danger'
        }else if( cgpa >= 1 && cgpa < 2 ){
            fainalGrade = 'D'
            color = 'success'
        }else if( cgpa >= 2 && cgpa < 3 ){
            fainalGrade = 'C'
            color = 'success'
        }else if( cgpa >= 3 && cgpa < 3.5 ){
            fainalGrade = 'B'
            color = 'success'
        }else if( cgpa >= 3.5 && cgpa < 4 ){
            fainalGrade = 'A-'
            color = 'success'
        }else if( cgpa >= 4 && cgpa < 5 ){
            fainalGrade = 'A'
            color = 'success'
        }else if( cgpa == 5){
            fainalGrade = 'A+'
            color = 'success'
        }

        return {
            fainalCgpa : fainalGrade == 'F' ? 'Faidel' : cgpa.toFixed(2),
            fainalGrade : fainalGrade,
            color : color,
        }

    }
}


let resultin = new Result();