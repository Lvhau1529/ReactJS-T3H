// OOP JS
class student {
	// Luu y khong dung var, let, const de khai bao
	masv = 621089; // Khai bao thuoc tinh
	name = "Le Van Hau";
	// Khai bao phuong thuc (ham - hanh dong cua doi tuong)
	hocBai(subject = "C/C++") {
		return `Dang hoc mon ${subject}`;
	};

	// Luu y khong co tu khoa function
	diNgu(time = "1AM") {
		return `${time} roi ngu thoi`;
	};

	diHoc = (time = "7AM") => {
		return `Di hoc vao luc ${time}`;
	};

    // Phuong thuc static
    // This === student
    // Trong static khong ton tai this!
	static giaiLaoGiuaGio(obj) {
        // Tham so obj la doi tuong cua class truyen vao
        return `${obj.name} ra ngoai uong tra da`
    };

    constructor(name) {
        console.log(`Hi ${name}. Toi se la phuong thuc chay dau tien!`);
        this.email = '@gmail'
        this.phone = '12345'
    }
    // Thong thuong la noi de khai bao thuoc tinh
}

// Khoi tao doi tuong cho class
let st = new student('Le Van Hau'); // Them tham so vao day de chay Constructor
// truy cap vao thuoc tinh trong class
let myName = st.name;
console.log(myName);
console.log(st.hocBai("ReactJS")); // Truy cap phuong thuc can dau ()
console.log(student.giaiLaoGiuaGio(st));

