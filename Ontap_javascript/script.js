class Student{
    constructor(code, name, gender, birthdate, homtown){
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate;
        this.hometown = hometown;
    }
}
class StudentManager{
    Constructor() {
        this.students = JSON.parse(localStorage.getItem('students'));
        this.loadStudents();
    }
    saveStudent(){
        localStorage.setItem('students',JSON.stringify(this.students));
    }
    addStudent(student){
        this.students.push(student);
        this.saveStudents();
        this.loadStudents();
    }
    editStudent([index, student]){
        this.students[index] = student;
        this.saveStudents();
        this.loadStudents();
    }
    deleteStudent(index){
        this.students.splice(index,1);
        this.saveStudents();
        this.loadStudents();
    }
    loadStudents(){
        const tableBody = document.querySelectorAll('#student-table tbody');
        tableBody.innerHTML = '';
        this.students.forEach((student,index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${student.code}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.birthdate}</td>
            <td>${student.hometown}</td>
            <td>
                <button onclick="studentManager.editRow(${index})">Sửa</button>
                <button onclick="studentManager.deleteStudent(${index})">Xóa</button>
            </td>
        `;
        tableBody.appendChild(row);
        });

    }
    edditRow(index){
        const student = this.student[index];
        document.querySelector('#student-id').value = index;
        document.querySelectorAll('#student-code').value = student.code;
        document.querySelectorAll('#full-name').value = student.name;
        document.querySelectorAll('#gender').value = student.gender;
        document.querySelectorAll('#birthdate').value = student.birthdate;
        document.querySelectorAll('#hometown').value = student.hometown;
    }
}
const studentManager = new StudentManager();
document.querySelector('#student-form').addEventListener('submit',function(event){
    event.preventDefault();
    const code = document.querySelectorAll('#student-code').value;
    const name = document.querySelectorAll('#full-name').value;
    const gender = document.querySelectorAll('#gender').value;
    const birthdate = document.querySelectorAll('#birthdate').value;
    const hometwown = document.querySelectorAll('#hometown').value;

    const id = document.querySelector('#student-id').value;
    if(id){
        studentManager.editStudent(id, new Student(code,name,gender,birthdate,hometown))
    }else{
        studentManager.addStudent(new Student(code,name,gender,birthdate,hometown))
    }
    document.querySelector('#student-form').reset();
    document.querySelector('#student-id').value= '';
})

