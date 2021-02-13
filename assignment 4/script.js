var names=new Array();
names[0]="Yaakov";
names[1]="Ainur";
names[2]="Janna";
names[3]="jason";
names[4]="Kat";
names[5]="jim";
names[6]="larry";
names[7]="Maria";
names[8]="laura";
names[9]="Janara";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}